import React, { useContext, useMemo, useEffect } from 'react';
import styled from "styled-components";
import { SnapshotContext } from "../../hooks/useSnapshot";
import { colors } from "../../constants"


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

    const getDotColor = (index) => {
        switch (index) {
            case 0:
                return "#65D6D2"
            case 1:
                return "#8FD9ED"
            case 2:
                return "#5AAEE1"
            case 3:
                return "#5181FD"
            case 4:
                return "#6C79FB"
            default:
                return "grey"
        }

    }

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
        return pools.map((pool, index) => {
            const totalPerlStaked = (pool.bptInRewardContract / pool.totalBpt) * pool.totalPerl
            const totalLockedBpt = pool.bptInRewardContract
            const totalUnlockedBpt = Number(pool.totalBpt) - Number(totalLockedBpt)
            const lockedPercentage = (Number(totalLockedBpt) / Number(pool.totalBpt)) * 100
            const totalShare = (Number(pool.totalPerl) / Number(totalLiquidity)) * 100
            const rewardAllocation = (totalShare / 100) * Number(1000000)
            const rewardPer100PERL = (rewardAllocation / totalPerlStaked) * 100

            return {
                name: pool.name,
                totalBpt: pool.totalBpt,
                totalPerl: pool.totalPerl,
                totalPerlStaked,
                totalLockedBpt,
                totalUnlockedBpt,
                lockedPercentage,
                totalShare,
                rewardAllocation,
                rewardPer100PERL
            }
        })

    }, [pools])


    useEffect(() => {
        if (metricData.length > 0) {
            const rewardPerHundred = metricData.reduce((json, pool) => {
                json[pool.name] = pool.rewardPer100PERL
                return json
            }, {})
            setRewardPerHundred(rewardPerHundred)
        }
    }, [metricData, setRewardPerHundred])

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
                        <th>PERL Staked</th>
                        <th width="10%">PERL reward / 100 PERL staked</th>
                    </tr>
                </thead>
                <tbody>
                    {metricData.map((pool, index) => {
                        return (
                            <tr>
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
                                    {pool.totalShare.toFixed(2)}%
                                </td>
                                <td>
                                    {Number(pool.rewardAllocation).toLocaleString()}
                                </td>
                                <td>
                                    {Number(pool.totalPerlStaked).toLocaleString()}
                                </td>
                                <td>
                                    {Number(pool.rewardPer100PERL).toLocaleString()}
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