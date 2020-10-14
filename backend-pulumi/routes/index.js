const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const axios = require('axios');
const { ethers } = require("ethers");
const { ERC20_ABI, BALANCER_ABI, REWARD_ABI, EMP_ABI } = require("../abi");
const { POOLS, PERL_ERC20, REWARD_CONTRACT, COINGECKO_IDS, INFURA_KEY, SYNTHS } = require("../constants");
const { convertTimestampToBlocktime, getTokenLatestPrices, getTokenHistoricalPrice } = require("../utils");

const getProvider = () => new ethers.providers.InfuraProvider("homestead", INFURA_KEY)

const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
}

const GENESIS_BLOCK = 10695838; // the earliest block that one of PerlinX's contracts has been deployed


// Get a snapshot of PerlinX's liquidity, volume and so on...
exports.snapshot = async (event) => {

    try {
        const provider = getProvider();
        const blockNumber = await provider.getBlockNumber();
        const perlContract = new ethers.Contract(PERL_ERC20, ERC20_ABI, provider);

        const priceData = await getTokenLatestPrices();
        let size = 0; // In Usd
        let totalTxs = 0;
        const CURRENT_BLOCK = blockNumber;

        const now = new Date();
        // const yesterdayTimestamp = now.valueOf() - (86400 * 1000);
        const lastHourTimestamp = now.valueOf() - (3600 * 1000);
        const LAST_HOUR_BLOCK = await convertTimestampToBlocktime(provider, lastHourTimestamp);
        // const YESTERDAY_BLOCK = await convertTimestampToBlocktime(provider, yesterdayTimestamp);

        const getPoolData = async (pool) => {
            // Looks for PERL that holding by the liquidity pool contract / BPT on Reward contract
            const currentBalance = await perlContract.balanceOf(pool.exchangeAddress)
            const bpt = new ethers.Contract(pool.exchangeAddress, ERC20_ABI, provider)
            const totalSupply = await bpt.totalSupply()
            const bptInRewardContract = await bpt.balanceOf(REWARD_CONTRACT)

            const poolLiquidityData = {
                totalPerl: ethers.utils.formatEther(currentBalance),
                totalBpt: ethers.utils.formatEther(totalSupply),
                bptInRewardContract: ethers.utils.formatEther(bptInRewardContract)
            }

            // Looks for tokens been locked by the liquidity pool and its prices
            const poolContract = new ethers.Contract(pool.exchangeAddress, BALANCER_ABI, provider);
            const currentTokens = await poolContract.getCurrentTokens();

            let tokens = [];
            let poolSize = 0;

            let tokenMap = {};

            for (let tokenAddress of currentTokens) {
                const lockedToken = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
                const symbol = await lockedToken.symbol();
                const decimals = await lockedToken.decimals();

                const weight = await poolContract.getNormalizedWeight(tokenAddress);
                
                let currentPrice = 1
                if (symbol.indexOf("pxUSD") === -1) {
                    const tokenId = COINGECKO_IDS.filter(item => item.symbol === symbol)[0].id;
                    currentPrice = priceData[tokenId].usd;
                }

                const balanceWei = await lockedToken.balanceOf(pool.exchangeAddress);
                const balance = ethers.utils.formatUnits(balanceWei, decimals);
                const balanceInUsd = Number(balance) * Number(currentPrice);
                size += balanceInUsd;
                poolSize += balanceInUsd;

                tokenMap[tokenAddress.toLowerCase()] = Number(currentPrice);

                tokens.push({
                    symbol,
                    decimals,
                    balance,
                    balanceInUsd: `${balanceInUsd}`,
                    price: `${currentPrice}`,
                    weight: ethers.utils.formatEther(weight)
                })
            }

            // Looks for the volume
            const txs = await poolContract.queryFilter("LOG_SWAP", LAST_HOUR_BLOCK, CURRENT_BLOCK);
            totalTxs += txs.length;
            const volume = txs.reduce((sum, tx) => {
                try {
                    const tokenAddress = tx.args[2]
                    const amount = tx.args[4]
                    sum += (tokenMap[tokenAddress.toLowerCase()] * Number(ethers.utils.formatEther(amount)))
                } catch (e) {

                }
                return sum;
            }, 0)

            return {
                name: pool.name,
                ...poolLiquidityData,
                poolSize: `${poolSize}`,
                volume: `${volume}`,
                totalTxs: `${txs.length}`,
                tokens
            }
        }

        const getTotalReward = async () => {
            const rewardInWei = await perlContract.balanceOf(REWARD_CONTRACT)
            return ethers.utils.formatEther(rewardInWei)
        }

        const pools = await Promise.all(POOLS.map(pool => {
            return getPoolData(pool)
        }))

        const totalPerlStaked = pools.reduce((sum, pool) => {
            const actualStaked = (Number(pool.bptInRewardContract) / Number(pool.totalBpt)) * Number(pool.totalPerl)
            return sum + actualStaked
        }, 0)

        const totalPerlLiquidity = pools.reduce((sum, pool) => {
            return sum + Number(pool.totalPerl)
        }, 0)

        const totalReward = await getTotalReward()
        const volumeLastHour = pools.reduce((sum, pool) => {
            return sum + (Number(pool.volume))
        }, 0)

        const getTotalUsers = async () => {
            const rewardContract = new ethers.Contract(REWARD_CONTRACT, REWARD_ABI, provider);
            const total = await rewardContract.memberCount()
            return total.toString();
        }

        const totalUsers = await getTotalUsers()

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({
                status: "ok",
                datetime: new Date().toISOString(),
                blockNumber: `${blockNumber}`,
                totalPerlStaked: `${totalPerlStaked}`,
                totalPerlLiquidity: `${totalPerlLiquidity}`,
                currentReward: `${totalReward}`,
                totalPools: pools.length,
                volumeLastHour: `${volumeLastHour}`,
                totalSize: `${size}`,
                totalTxs: `${totalTxs}`,
                pools,
                totalUsers
            })
        }

    } catch (error) {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                status: "error",
                message: `${error.message || "Unknown error."}`
            }),
        };
    }




}


// Get a snapshot for the given timestamp, please note that result will be returned for the whole day
exports.history = async (event) => {
    try {
        const { queryStringParameters } = event;
        let timestamp = 0;
        if (queryStringParameters && queryStringParameters.timestamp) {
            timestamp = Number(queryStringParameters.timestamp) * 1000;
            const now = Math.floor(new Date().valueOf());
            const dummy = new Date(timestamp);

            if (!(dummy instanceof Date && !isNaN(dummy.valueOf()))) {
                throw new Error("Timestamp supplied is not valid.");
            }

            if (timestamp > now) {
                console.log("timestamp is invalid.");
                throw new Error("Timestamp supplied is bigger than now.");
            }

        } else {
            throw new Error("Timestamp is not provided.")
        }
        const roundDate = (timeStamp) => {
            timeStamp -= timeStamp % (24 * 60 * 60 * 1000);//subtract amount of time since midnight 
            return new Date(timeStamp);
        }

        const provider = getProvider();
        // prepares time constants
        const startTime = roundDate(timestamp);
        const endTime = new Date(startTime.valueOf() + 86400000);

        const startBlock = await convertTimestampToBlocktime(provider, startTime.valueOf());
        const endBlock = await convertTimestampToBlocktime(provider, endTime.valueOf());

        const priceData = await getTokenHistoricalPrice(timestamp);

        let size = 0; // In Usd
        let totalTxs = 0;

        const blockPerHour = Math.floor((endBlock - startBlock) / 24);
        const blockPerDay = endBlock - startBlock;

        let data = {};
        let tempTxs = {};
        let tempBase = {};
        let tokenMap = {};

        const perlContract = new ethers.Contract(PERL_ERC20, ERC20_ABI, provider);

        const getPoolHistoricalData = async (pool) => {
            // looks for how much PERL holding by the exchange contract at the begining of the day
            const poolContract = new ethers.Contract(pool.exchangeAddress, BALANCER_ABI, provider);
            const fundingTxs = await perlContract.queryFilter(perlContract.filters.Transfer(null, pool.exchangeAddress), GENESIS_BLOCK, endBlock)
            const fundingSum = fundingTxs.reduce((sum, tx) => {
                if (tx.blockNumber < startBlock) {
                    sum += Number(ethers.utils.formatEther(tx.args[2]))
                }
                return sum;
            }, 0);
            const withdrawTxs = await perlContract.queryFilter(perlContract.filters.Transfer(pool.exchangeAddress, null), GENESIS_BLOCK, endBlock)
            const withdrawSum = withdrawTxs.reduce((sum, tx) => {
                if (tx.blockNumber < startBlock) {
                    sum += Number(ethers.utils.formatEther(tx.args[2]))
                }
                return sum;
            }, 0);
            let baseBalance = fundingSum - withdrawSum;
            const txs = fundingTxs.concat(withdrawTxs);
            // then looks over BPT token holding by the exchange contract and reward contract
            const bpt = new ethers.Contract(pool.exchangeAddress, ERC20_ABI, provider);
            // checking total supply over time
            const bptTotalSupplyTxsRaw = await Promise.all([
                bpt.queryFilter(bpt.filters.Transfer("0x0000000000000000000000000000000000000000", pool.exchangeAddress), GENESIS_BLOCK, endBlock),
                bpt.queryFilter(bpt.filters.Transfer(pool.exchangeAddress, "0x0000000000000000000000000000000000000000"), GENESIS_BLOCK, endBlock),
            ])
            const bptTotalSupplyTxs = bptTotalSupplyTxsRaw[0].concat(bptTotalSupplyTxsRaw[1])
            let baseTotalBpt = bptTotalSupplyTxs.reduce((sum, tx) => {
                if (tx.blockNumber < startBlock) {
                    if (tx.args[1].toLowerCase() === pool.exchangeAddress.toLowerCase()) {
                        sum += Number(ethers.utils.formatEther(tx.args[2]))
                    } else {
                        sum -= Number(ethers.utils.formatEther(tx.args[2]))
                    }
                }
                return sum;
            }, 0)
            // checking how much BPT holding in the reward contract
            const bptInRewardRaw = await Promise.all([
                bpt.queryFilter(bpt.filters.Transfer(null, REWARD_CONTRACT), GENESIS_BLOCK, endBlock),
                bpt.queryFilter(bpt.filters.Transfer(REWARD_CONTRACT, null), GENESIS_BLOCK, endBlock),
            ])
            const bptInRewardTxs = bptInRewardRaw[0].concat(bptInRewardRaw[1])

            let baseBalanceBptInRewardContract = bptInRewardTxs.reduce((sum, tx) => {
                if (tx.blockNumber < startBlock) {
                    if (tx.args[1].toLowerCase() === REWARD_CONTRACT.toLowerCase()) {
                        sum += Number(ethers.utils.formatEther(tx.args[2]))
                    } else {
                        sum -= Number(ethers.utils.formatEther(tx.args[2]))
                    }
                }
                return sum;
            }, 0)

            for (let count = 0; count < 24; count += 1) {
                const hourIndex = count;
                // looks for how much PERL holding by the exchange contract per hour
                const balance = txs.reduce((sum, tx) => {

                    if ((tx.blockNumber >= (startBlock + ((hourIndex) * blockPerHour))) && ((tx.blockNumber < (startBlock + ((hourIndex + 1) * blockPerHour))))) {
                        if (tx.args[1].toLowerCase() === pool.exchangeAddress.toLowerCase()) {
                            sum += Number(ethers.utils.formatEther(tx.args[2]))
                        }
                        if (tx.args[0].toLowerCase() === pool.exchangeAddress.toLowerCase()) {
                            sum -= Number(ethers.utils.formatEther(tx.args[2]))
                        }
                    }

                    return sum;
                }, baseBalance)

                baseBalance = balance;


                // BPT Total Supply
                const totalBpt = bptTotalSupplyTxs.reduce((sum, tx) => {
                    if ((tx.blockNumber >= (startBlock + ((hourIndex) * blockPerHour))) && ((tx.blockNumber < (startBlock + ((hourIndex + 1) * blockPerHour))))) {
                        if (tx.args[1].toLowerCase() === pool.exchangeAddress.toLowerCase()) {
                            sum += Number(ethers.utils.formatEther(tx.args[2]))
                        } else {
                            sum -= Number(ethers.utils.formatEther(tx.args[2]))
                        }
                    }
                    return sum;
                }, baseTotalBpt)

                baseTotalBpt = totalBpt

                // BPT in Reward Contract
                const balanceBptInRewardContract = bptInRewardTxs.reduce((sum, tx) => {
                    if ((tx.blockNumber >= (startBlock + ((hourIndex) * blockPerHour))) && ((tx.blockNumber < (startBlock + ((hourIndex + 1) * blockPerHour))))) {
                        if (tx.args[1].toLowerCase() === REWARD_CONTRACT.toLowerCase()) {
                            sum += Number(ethers.utils.formatEther(tx.args[2]))
                        } else {
                            sum -= Number(ethers.utils.formatEther(tx.args[2]))
                        }
                    }
                    return sum;
                }, baseBalanceBptInRewardContract)

                baseBalanceBptInRewardContract = balanceBptInRewardContract;

                const timestamp = (startTime.valueOf() + (count * (3600 * 1000)))

                // Looks for tokens been locked by the liquidity pool and its prices
                const currentTokens = await poolContract.getCurrentTokens();
                const pairTokenAddress = currentTokens.filter(address => address.toLowerCase() !== PERL_ERC20.toLowerCase())
                let tokens = []
                if (pairTokenAddress[0]) {
                    // Re-use liquidity data for PERL
                    const perlPrice = priceData.filter(item => item.symbol === "PERL")[0].usd;
                    tokenMap[PERL_ERC20.toLowerCase()] = perlPrice;
                    tokens.push({
                        symbol: "PERL",
                        decimals: 18,
                        weight: 0.5,
                        balance: `${balance}`,
                        balanceInUsd: `${perlPrice * balance}`,
                        price: `${perlPrice}`
                    })
                    // Now looks for Pair token
                    const tokenAddress = pairTokenAddress[0]
                    const lockedToken = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
                    const symbol = await lockedToken.symbol();
                    const decimals = await lockedToken.decimals();
                    const weight = await poolContract.getNormalizedWeight(tokenAddress);
                    const currentPrice = priceData.filter(item => item.symbol.toLowerCase() === symbol.toLowerCase())[0].usd;
                    tokenMap[tokenAddress.toLowerCase()] = currentPrice;

                    if (tempTxs[tokenAddress] === undefined) {
                        const inOutTxs = await Promise.all([
                            lockedToken.queryFilter(lockedToken.filters.Transfer(null, pool.exchangeAddress), GENESIS_BLOCK, endBlock),
                            lockedToken.queryFilter(lockedToken.filters.Transfer(pool.exchangeAddress, null), GENESIS_BLOCK, endBlock),
                        ])
                        tempTxs[tokenAddress] = inOutTxs[0].concat(inOutTxs[1])
                        tempBase[tokenAddress] = tempTxs[tokenAddress].reduce((sum, tx) => {
                            if (tx.blockNumber < startBlock) {
                                if (tx.args[1].toLowerCase() === pool.exchangeAddress.toLowerCase()) {
                                    sum += Number(ethers.utils.formatEther(tx.args[2]))
                                } else {
                                    sum -= Number(ethers.utils.formatEther(tx.args[2]))
                                }
                            }
                            return sum;
                        }, 0)
                    }
                    const pairTokenBalance = tempTxs[tokenAddress].reduce((sum, tx) => {
                        if ((tx.blockNumber >= (startBlock + ((hourIndex) * blockPerHour))) && ((tx.blockNumber < (startBlock + ((hourIndex + 1) * blockPerHour))))) {
                            if (tx.args[1].toLowerCase() === pool.exchangeAddress.toLowerCase()) {
                                sum += Number(ethers.utils.formatEther(tx.args[2]))
                            } else {
                                sum -= Number(ethers.utils.formatEther(tx.args[2]))
                            }
                        }
                        return sum;
                    }, tempBase[tokenAddress]);

                    tempBase[tokenAddress] = pairTokenBalance;

                    tokens.push({
                        symbol: symbol,
                        decimals: decimals,
                        weight: ethers.utils.formatEther(weight),
                        balance: `${pairTokenBalance}`,
                        balanceInUsd: `${currentPrice * pairTokenBalance}`,
                        price: `${currentPrice}`
                    })


                }

                // Put it all to JSON
                if (data[timestamp] === undefined) {
                    data[timestamp] = {
                        timestamp,
                        blockNumber: (startBlock + ((hourIndex) * blockPerHour)),
                        datetime: new Date(timestamp).toISOString(),
                        network: "mainnet",
                        pools: {
                            [pool.name]: {
                                name: pool.name,
                                totalPerl: `${balance}`,
                                totalBpt: `${totalBpt}`,
                                bptInRewardContract: `${balanceBptInRewardContract}`,
                                tokens
                            }
                        }
                    }
                } else {
                    // overrides if the data is there
                    data[timestamp] = {
                        ...data[timestamp],
                        pools: {
                            ...data[timestamp].pools,
                            [pool.name]: {
                                name: pool.name,
                                totalPerl: `${balance}`,
                                totalBpt: `${totalBpt}`,
                                bptInRewardContract: `${balanceBptInRewardContract}`,
                                tokens
                            }
                        }
                    }
                }
            }
        }

        await Promise.all(POOLS.map(pool => {
            return getPoolHistoricalData(pool)
        }))

        const finalize = async () => {
            const timestamps = Object.keys(data);
            const rewardTxsRaw = await Promise.all([
                perlContract.queryFilter(perlContract.filters.Transfer(null, REWARD_CONTRACT), GENESIS_BLOCK, endBlock),
                perlContract.queryFilter(perlContract.filters.Transfer(REWARD_CONTRACT, null), GENESIS_BLOCK, endBlock),
            ])
            const rewardTxs = rewardTxsRaw[0].concat(rewardTxsRaw[1])
            const basePerlInReward = rewardTxs.reduce((sum, tx) => {
                if (tx.blockNumber < startBlock) {
                    if (tx.args[1].toLowerCase() === REWARD_CONTRACT.toLowerCase()) {
                        sum += Number(ethers.utils.formatEther(tx.args[2]))
                    } else {
                        sum -= Number(ethers.utils.formatEther(tx.args[2]))
                    }
                }
                return sum
            }, 0);

            const getFinalData = async (timestamp, index) => {

                let row = data[timestamp];
                const nonArrayPools = Object.keys(row.pools);
                let pools = [];

                for (let name of nonArrayPools) {
                    const thisPool = row.pools[name]
                    const poolSize = thisPool.tokens.reduce((sum, token) => {
                        return sum + Number(token.balanceInUsd)
                    }, 0)
                    const poolAddress = POOLS.filter(pool => pool.name === name)[0].exchangeAddress;
                    const poolContract = new ethers.Contract(poolAddress, BALANCER_ABI, provider);
                    // Looks for the volume
                    const volumeTxs = await poolContract.queryFilter("LOG_SWAP", startBlock + ((index) * blockPerHour), startBlock + ((index + 1) * blockPerHour));

                    const volume = volumeTxs.reduce((sum, tx) => {
                        try {
                            const tokenAddress = tx.args[2]
                            const amount = tx.args[4]

                            sum += (tokenMap[tokenAddress.toLowerCase()] * Number(ethers.utils.formatEther(amount)))
                        } catch (e) {

                        }
                        return sum;
                    }, 0);

                    pools.push({
                        ...thisPool,
                        poolSize: `${poolSize}`,
                        volume: `${volume}`,
                    })
                }
                const totalPerlLiquidity = pools.reduce((sum, pool) => {
                    return sum + Number(pool.totalPerl)
                }, 0)
                const totalPerlStaked = pools.reduce((sum, pool) => {
                    const actualStaked = (Number(pool.bptInRewardContract) / Number(pool.totalBpt)) * Number(pool.totalPerl)
                    return sum + actualStaked
                }, 0)

                const volumeLastHour = pools.reduce((sum, pool) => {
                    return sum + (Number(pool.volume))
                }, 0)


                const getTotalReward = async () => {
                    const rewardTxsRaw = await Promise.all([
                        perlContract.queryFilter(perlContract.filters.Transfer(null, REWARD_CONTRACT), startBlock, startBlock + ((index + 1) * blockPerHour)),
                        perlContract.queryFilter(perlContract.filters.Transfer(REWARD_CONTRACT, null), startBlock, startBlock + ((index + 1) * blockPerHour)),
                    ])
                    const rewardTxs = rewardTxsRaw[0].concat(rewardTxsRaw[1])
                    const totalReward = rewardTxs.reduce((sum, tx) => {
                        if (tx.args[1].toLowerCase() === REWARD_CONTRACT.toLowerCase()) {
                            sum += Number(ethers.utils.formatEther(tx.args[2]))
                        } else {
                            sum -= Number(ethers.utils.formatEther(tx.args[2]))
                        }
                        return sum
                    }, basePerlInReward);
                    return totalReward
                }

                const totalReward = await getTotalReward()

                const totalSize = pools.reduce((sum, pool) => sum + Number(pool.poolSize), 0);

                return {
                    ...row,
                    blockNumber: (startBlock + ((index) * blockPerHour)),
                    pools,
                    datetime: new Date(startTime.valueOf() + (3600 * 1000 * index)).toISOString(),
                    network: "mainnet",
                    totalPerlLiquidity: `${totalPerlLiquidity}`,
                    currentReward: `${totalReward}`,
                    totalPerlStaked: `${totalPerlStaked}`,
                    totalPools: pools.length,
                    totalSize: `${totalSize}`,
                    volumeLastHour: `${volumeLastHour}`,
                }
            }
            return await Promise.all(timestamps.map((timestamp, index) => getFinalData(timestamp, index)))
        }

        const finalData = await finalize();

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({
                status: "ok",
                // data
                data: finalData
            })
        }
    } catch (error) {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                status: "error",
                message: `${error.message || "Unknown error."}`
            }),
        };
    }
}

exports.data = async (event, TableName) => {
    const client = new aws.sdk.DynamoDB.DocumentClient();

    const now = (new Date().valueOf());
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let from = yesterday.valueOf();

    const params = {
        TableName: TableName,
        KeyConditionExpression: "#network = :network and #timestamp BETWEEN :from AND :to",
        ExpressionAttributeNames: {
            "#timestamp": "timestamp",
            "#network": "network"
        },
        ExpressionAttributeValues: {
            ":from": from,
            ":to": now,
            ":network": "mainnet"
        }
    };

    const hourly = await client.query(params).promise();


    // use 2 weeks timeframe for the daily 
    let weeksAgo = new Date();
    weeksAgo.setDate(weeksAgo.getDate() - 14);
    from = weeksAgo.valueOf();

    const paramsDaily = {
        TableName: TableName,
        KeyConditionExpression: "#network = :network and #timestamp BETWEEN :from AND :to",
        ExpressionAttributeNames: {
            "#timestamp": "timestamp",
            "#network": "network"
        },
        ExpressionAttributeValues: {
            ":from": from,
            ":to": now,
            ":network": "mainnet"
        }
    };

    const roundDate = (timeStamp) => {
        timeStamp -= timeStamp % (24 * 60 * 60 * 1000);//subtract amount of time since midnight
        timeStamp += new Date().getTimezoneOffset() * 60 * 1000;//add on the timezone offset
        return new Date(timeStamp);
    }

    const { Items } = await client.query(paramsDaily).promise();

    const object = Items
        .filter(
            item => item.blockNumber
        )
        .map(item => {
            const date = roundDate(item.timestamp)
            return {
                date, item
            }
        })
        .reduce((result, object) => {
            if (result[object.date.valueOf()]) {
                result[object.date.valueOf()] = {
                    totalSize: result[object.date.valueOf()].totalSize + Number(object.item.totalSize),
                    volume: result[object.date.valueOf()].volume + Number(object.item.volumeLastHour),
                    count: result[object.date.valueOf()].count + 1,
                    totalPerlStaked: result[object.date.valueOf()].totalPerlStaked + Number(object.item.totalPerlStaked),
                    totalPerlLiquidity: result[object.date.valueOf()].totalPerlLiquidity + Number(object.item.totalPerlLiquidity)
                }
            } else {
                result[object.date.valueOf()] = {
                    totalSize: Number(object.item.totalSize),
                    volume: Number(object.item.volumeLastHour),
                    count: 1,
                    totalPerlStaked: Number(object.item.totalPerlStaked),
                    totalPerlLiquidity : Number(object.item.totalPerlLiquidity)
                }
            }

            return result;
        }, {})

    const daily = Object.keys(object).map(timestamp => {
        return {
            timestamp,
            volume: object[timestamp].volume,
            totalSize: object[timestamp].totalSize / object[timestamp].count,
            totalPerlStaked: object[timestamp].totalPerlStaked / object[timestamp].count,
            totalPerlLiquidity: object[timestamp].totalPerlLiquidity / object[timestamp].count,
        }
    })

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok",
            data: {
                hourly: hourly.Items.filter(item => item.blockNumber),
                daily
            }
        })
    }
}

exports.stat = async (event, TableName) => {
    const client = new aws.sdk.DynamoDB.DocumentClient();

    const now = (new Date().valueOf());
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let from = yesterday.valueOf();

    const params = {
        TableName: TableName,
        KeyConditionExpression: "#network = :network and #timestamp BETWEEN :from AND :to",
        ExpressionAttributeNames: {
            "#timestamp": "timestamp",
            "#network": "network"
        },
        ExpressionAttributeValues: {
            ":from": from,
            ":to": now,
            ":network": "mainnet"
        }
    };

    const { Items } = await client.query(params).promise();

    const volume = Items.filter(item => item.blockNumber).reduce((sum, item) => {
        return sum + Number(item.volumeLastHour);
    }, 0)

    const lastItem = Items.filter(item => item.blockNumber).reduce((last, item) => {
        last = item
        return last;
    }, {})

    const lastUpdatedTimestamp = lastItem.timestamp;
    const totalPerlStaked = lastItem.totalPerlStaked;
    const totalSize = lastItem.totalSize;
    const currentReward = lastItem.currentReward;
    const totalUsers = lastItem.totalUsers || 0;

    // Provides each pool volume
    let pools = []
    try {
        const volumeJson = Items.filter(item => item.blockNumber).reduce((result, item) => {
            item.pools.forEach((pool) => {
                if (result[pool.name]) {
                    result[pool.name] += Number(pool.volume)
                } else {
                    result[pool.name] = Number(pool.volume)
                }
            })
            return result
        }, {})
        for (let poolName of Object.keys(volumeJson)) {
            pools.push({
                name : poolName,
                volume : volumeJson[poolName]
            })
        }
    } catch (e) {

    }

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok",
            lastUpdatedTimestamp,
            totalPerlStaked,
            totalSize,
            volume,
            currentReward,
            totalUsers,
            pools
        })
    }
}


// Get gas prices from DefiPulse
exports.gas = async (event) => {

    const { data } = await axios.get("https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=b562c1f4ec0f5389fdbbe20911c2e67cf9216f4dab64f1d85efe3b5c59e2")

    const payload = {
        fast: data.fast,
        fastest: data.fastest,
        safeLow: data.safeLow,
        average: data.average
    }


    let claimData = {}

    try {
        const provider = getProvider();
        const rewardContract = new ethers.Contract(REWARD_CONTRACT, REWARD_ABI, provider);
        const currentBlock = await provider.getBlockNumber();
        const lastWeekBlock = currentBlock - (5760*7) // rough calculation eg. 1 day = 5760 blocks
        // Looks for the volume
        let txs = await rewardContract.queryFilter("MemberClaims", lastWeekBlock, currentBlock);
        txs = txs.slice(-5)
        
        let gasUsedTotal = 0;
        for (let tx of txs) {
            const receipt = await tx.getTransactionReceipt()
            gasUsedTotal += Number(receipt.gasUsed.toString())
        }
        const gasUsed = gasUsedTotal/5
        const priceData = await getTokenLatestPrices();
        
        const claimRewardFee = ((Number(gasUsed) * Number(payload.safeLow)) / (10**9))
        const perlEthRatio = Number(priceData.perlin.usd) / Number(priceData.weth.usd)

        claimData = {
            gasUsed : `${gasUsed}`,
            claimRewardFee : claimRewardFee ,
            perlEthRatio : perlEthRatio,
            equivalentGasFee : claimRewardFee/ perlEthRatio
        }

    } catch (e) {
        console.log(`Can't get claim data : ${e.message}`)
    }

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok",
            ...payload,
            ...claimData

        })
    }

}

// Get PERL total supply
exports.totalSupply = async (event) => {
    let payload = {}
    try {
        const provider = getProvider();
        const perlContract = new ethers.Contract(PERL_ERC20, ERC20_ABI, provider);
        const totalSupply = await perlContract.totalSupply();
        payload = {
            totalSupply : ethers.utils.formatEther(totalSupply)
        }
    } catch (e) {
        console.log(`Can't get totalsupply : ${e.message}`)
    }
    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            status: "ok",
            ...payload,
        })
    }
}

// Get pxUSD data
exports.syntheticData = async (event) => {
    let payload = {}
    try {
        const provider = getProvider();
        const perlContract = new ethers.Contract(PERL_ERC20, ERC20_ABI, provider);
        payload['synthetics'] = []

        for (let synth of SYNTHS) {
            const totalCollateral = await perlContract.balanceOf(synth.empAddress)
            const erc20Contract = new ethers.Contract(synth.erc20Address, ERC20_ABI, provider)
            const totalMinted = await erc20Contract.totalSupply()
            payload.synthetics.push({
                name : synth.name,
                address: synth.empAddress ,
                erc20Address : synth.erc20Address,
                totalCollateral : ethers.utils.formatEther(totalCollateral),
                totalMinted : ethers.utils.formatEther(totalMinted)
            })
        }

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({
                status: "ok",
                ...payload,
            })
        }
    } 
    catch (error) {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                status: "error",
                message: `${error.message || "Unknown error."}`
            }),
        };
    }
}