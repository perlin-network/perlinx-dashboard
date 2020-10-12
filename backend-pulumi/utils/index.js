const Twit = require('twit');
const axios = require("axios");
const { TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET, TWITTER_API, TWITTER_API_SECRET, COINGECKO_BASE_URL, COINGECKO_IDS } = require("../constants");

exports.roundMinutes = (date) => {
    date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds
    return date;
}

exports.postTwitterMessage = async (message) => {
    return new Promise((resolve) => {
        const T = new Twit({
            consumer_key: TWITTER_API,
            consumer_secret: TWITTER_API_SECRET,
            access_token: TWITTER_ACCESS_TOKEN,
            access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
            // timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
            // strictSSL: true,     // optional - requires SSL certificates to be valid.
        })

        T.post('statuses/update', { status: message }, function (err, data, response) {
            console.log("response from Twitter API  :", data);
            resolve();
        })
    })
}

exports.getTokenLatestPrices = async () => {
    try {
        const ids = COINGECKO_IDS.map((item) => item.id);
        const response = await axios.get(COINGECKO_BASE_URL + `/simple/price?ids=${ids.join(",")}&vs_currencies=usd`)
        // const response  =await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=perlin%2Cdai&vs_currencies=usd")

        return response.data;
    } catch (error) {
        console.log("fetch data from Coingecko error : ", error);
        throw new Error("fetch data from Coingecko failed!")
    }
}

exports.getTokenHistoricalPrice = async (timestamp) => {
    try {
        const ids = COINGECKO_IDS.map((item) => item.id);

        const date = new Date(timestamp);
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        const dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;

        const getPrice = async (id) => {
            const { data } = await axios.get(COINGECKO_BASE_URL + `/coins/${id}/history?date=${dateString}`)
            return {
                id,
                symbol : COINGECKO_IDS.filter((item) => item.id === id)[0].symbol,
                usd : data.market_data.current_price.usd
            }
        }

        const result = await Promise.all(ids.map(id => getPrice(id)))
        return result

    } catch (error) {
        console.log("fetch data from Coingecko error : ", error);
        throw new Error("fetch data from Coingecko failed!")
    }
}

exports.convertTimestampToBlocktime = async (provider, timestamp) => {
    const targetTimestamp = Math.floor(timestamp / 1000);
    let averageBlockTime = 17 * 1.5
    let currentBlockNumber = await provider.getBlockNumber();
    let block = await provider.getBlock(currentBlockNumber);

    let requestsMade = 0
    let blockNumber = currentBlockNumber
    while (block.timestamp > targetTimestamp) {

        let decreaseBlocks = (block.timestamp - targetTimestamp) / averageBlockTime
        decreaseBlocks = parseInt(decreaseBlocks)

        if (decreaseBlocks < 1) {
            break
        }

        blockNumber -= decreaseBlocks

        block = await provider.getBlock(blockNumber)
        requestsMade += 1
    }

    return block.number;
}