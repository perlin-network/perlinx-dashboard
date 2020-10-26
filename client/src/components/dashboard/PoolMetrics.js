import React, { useContext, useMemo, useEffect } from 'react';
import styled from "styled-components";
import { SnapshotContext } from "../../hooks/useSnapshot";
import { colors, REWARD_PER_PERIOD } from "../../constants"
import { getDotColor } from "../../utils/colors"

const Wrapper = styled.div`
    margin-top: 10px;
    background-color: ${colors.cardBackground};
    border-radius: 8px;
    padding-top: 10px;
    margin-bottom: 40px;
    padding: 20px;
    padding-bottom: 30px;
    

    h3 {
        font-size: 18px; 
    }


    table {
        margin-top: 30px;
        width: 100%;
    }

    thead {
        font-size: 14px;
        font-weight: 600;
        font-height: 20px;
        color: #B6D8F9;
        th {
            text-align: right;
        }
    }

    tbody {
        font-size: 14px;
        font-weight: 600;
        tr {
            height: 50px;
        }
        td {
            padding-right: 10px;
            text-align: right;
        }
       
    }


    @media only screen and (max-width: 600px) {
        overflow-y: scroll;
    }

    

`

const Dot = styled.div`
    height: 25px;
    width: 25px;
    background-color: ${props => props.color && `${props.color}`};
    border-radius: 50%;
    display: inline-block;
`

const PoolMetrics = () => {

    const context = useContext(SnapshotContext);
    const { feed } = context.data;
    const { setRewardPerHundred } = context;

    const poolData = useMemo(() => {
        let pools = []
        let totalLiquidity = 0;
        try {
            const lastItem = feed.data.hourly[feed.data.hourly.length - 1]
            totalLiquidity = lastItem.pools.reduce((sum, item) => {
                return sum + Number(item.totalPerl)
            }, 0)
            pools = lastItem.pools
        } catch (e) {
        }

        return {
            pools,
            totalLiquidity
        }

    }, [feed])

    const { pools, totalLiquidity } = poolData;

    const metricData = useMemo(() => {

        const getMultipler = (poolName ) => {
            if (poolName.indexOf("pxUSD") === -1) {
                return 1
            } else {
                return 3
            }
        }

        const totalPerlAfterMultiplied = pools.reduce((sum, pool) => {
            const multiplier = getMultipler(pool.name)
            return sum + (Number(pool.totalPerl) * multiplier)
        },0)

        return pools.map((pool, index) => {
            // const totalPerlStaked = (pool.bptInRewardContract / pool.totalBpt) * pool.totalPerl
            const totalPerlStaked =  pool.totalPerl
            const totalLockedBpt = pool.bptInRewardContract
            const totalUnlockedBpt = Number(pool.totalBpt) - Number(totalLockedBpt)
            const lockedPercentage = (Number(totalLockedBpt) / Number(pool.totalBpt)) * 100
            const rawTotalShare = (Number(pool.totalPerl) / Number(totalLiquidity)) * 100
            const multiplier = getMultipler(pool.name)
            const totalShare =  ((Number(pool.totalPerl) * multiplier) / Number(totalPerlAfterMultiplied)) * 100

            // const rewardAllocation = (totalShare / 100) * Number(REWARD_PER_PERIOD)
            // new reward calc. Oct onwards
            const rewardAllocation = (totalShare / 100) * Number(context?.data?.totalWeeklyRewardOct)
            const rewardPer100PERL = (rewardAllocation / totalPerlStaked) * 100
            const apr = ((rewardAllocation/ (totalPerlStaked * 2)) * 52)

            

            return {
                name: pool.name,
                totalBpt: pool.totalBpt,
                totalPerl: pool.totalPerl,
                totalPerlStaked,
                totalLockedBpt,
                totalUnlockedBpt,
                lockedPercentage,
                totalShare,
                rawTotalShare,
                rewardAllocation,
                rewardPer100PERL,
                apr
            }
        })

    }, [pools, totalLiquidity])


    useEffect(() => {
        if (metricData.length > 0) {
            const rewardPerHundred = metricData.reduce((json, pool) => {
                json[pool.name] = pool.rewardPer100PERL
                return json
            }, {}) 
            setRewardPerHundred(rewardPerHundred)
        }
        // eslint-disable-next-line
    }, [metricData])

    return (
        <Wrapper>
            <h3>Pool metrics</h3>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>Pool</th>
                        <th>Total LPT</th>
                        <th>Locked LPT</th>
                        <th>Not Locked LPT</th>
                        <th>% Locked</th>
                        <th>PERL Liquidity</th>
                        <th>Share of total</th>
                        <th>Rewards Allocated</th>
                        {/* <th>PERL Staked</th> */}
                        <th width="10%">PERL reward / 100 PERL staked</th>
                        <th>APY</th>
                    </tr>
                </thead>
                <tbody>
                    {metricData.map((pool, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <div>
                                            <Dot color={getDotColor(index)} />
                                        </div>

                                        <div style={{ marginTop: "auto", marginBottom: "auto", marginLeft: 10 }}>
                                            {pool.name}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {Number(pool.totalBpt).toLocaleString()}
                                </td>
                                <td>
                                    {Number(pool.totalLockedBpt).toLocaleString()}
                                </td>
                                <td>
                                    {Number(pool.totalUnlockedBpt).toLocaleString()}
                                </td>
                                <td>
                                    {pool.lockedPercentage.toFixed(2)}%
                                </td>
                                <td>
                                    {Number(pool.totalPerl).toLocaleString()}
                                </td>
                                <td>
                                    {pool.rawTotalShare.toFixed(2)}%
                                </td>
                                <td>
                                    {Number(pool.rewardAllocation).toLocaleString()}
                                </td>
                                {/* <td>
                                    {Number(pool.totalPerlStaked).toLocaleString()}
                                </td> */}
                                <td>
                                    {Number(pool.rewardPer100PERL).toLocaleString()}
                                </td>
                                <td>
                                    {(pool.apr * 100).toFixed(0)}%
                                </td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </Wrapper>
    )
}

export default PoolMetrics