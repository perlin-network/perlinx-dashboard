import React, { useEffect, useMemo, useReducer, createContext } from 'react';
import axios from "axios"
import { Spinner } from "reactstrap"
import { API_ENDPOINT, REWARD_PER_PERIOD } from "../constants"

export const SnapshotContext = createContext({});

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_DATA':
                    return {
                        ...prevState,
                        data: action.data,
                        isLoading: false,
                    };
                case 'SET_REWARD':
                    return {
                        ...prevState,
                        rewardPerHundredPerl: action.data
                    }
                case 'SET_TVL':
                    return {
                        ...prevState,
                        tvl: action.data
                    }
                case 'SET_XAU_PRICE':
                    return {
                        ...prevState,
                        xauPrice: action.data
                    }
                default:
                    return {
                        ...prevState
                    }
            }
        },
        {
            isLoading: true,
            rewardPerHundredPerl: {},
            tvl : 0,
            xauPrice: 0
        }
    )

    const { isLoading, data, rewardPerHundredPerl, tvl, xauPrice } = state;

    const apy = data ? ((REWARD_PER_PERIOD / (data.stat.totalPerlStaked * 2)) * 52 * 100) : 0

    const snapshotContext = useMemo(
        () => ({
            getGasData: async () => {
                try {
                    const { data } = await axios.get(`${API_ENDPOINT}/gas`)
                    return data
                } catch (e) {
                    return {}
                }
            },
            setRewardPerHundred: (value) => {
                dispatch({ type: 'SET_REWARD', data: value });
            },
            setTVL: (value) => {
                dispatch({ type: 'SET_TVL', data: value });
            },
            isLoading,
            data,
            rewardPerHundredPerl,
            apy,
            tvl,
            xauPrice
        }),
        [isLoading, data, rewardPerHundredPerl, apy, tvl, xauPrice]
    );

    const loadData = async () => {
        try {
            const statResponse = await axios.get(`${API_ENDPOINT}/stat`)
            const feedResponse = await axios.get(`${API_ENDPOINT}/data`)
            let data = {
                stat: statResponse.data,
                feed: feedResponse.data
            }
            // Getting PERL price / APY from the most recent record
            try {
                const mostRecentEntry = feedResponse.data.data.hourly[feedResponse.data.data.hourly.length - 1]
                // Latest reward calc. 
                const totalPerl = mostRecentEntry.pools.reduce((sum, item) => sum + Number(item.totalPerl), 0)
                const totalPerlLocked = mostRecentEntry.pools.reduce((sum, item) => {
                    let totalPerlLocked = 0
                    const bptFraction =  Number(item.bptInRewardContract) / Number(item.totalBpt)
                    if (!isNaN(bptFraction)) {
                        totalPerlLocked = bptFraction*item.totalPerl
                    }
                    return sum + (totalPerlLocked)
                }, 0)
                
                const averageApr = 0.2
               
                const perlPriceResponse = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=perlin%2Cdai&vs_currencies=usd")

                data = {
                    ...data,
                    perlPrice: perlPriceResponse?.data?.perlin?.usd,
                    apy: ((REWARD_PER_PERIOD / (Number(mostRecentEntry.totalPerlLiquidity) * 2)) * 52 * 100), // no longer used
                    totalWeeklyRewardOct: (totalPerl-totalPerlLocked) * (2 * averageApr / 52)
                }

            } catch (e) {

            }


            dispatch({ type: 'RESTORE_DATA', data });
        } catch (error) {
            alert("Server error ")
        }
    }

    const checkXAUPrice = async () => {
        try {
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0x45804880de22913dafe09f4980848ece6ecbaf78&vs_currencies=usdhttps://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0x45804880de22913dafe09f4980848ece6ecbaf78&vs_currencies=usd`)
            const price = data["0x45804880de22913dafe09f4980848ece6ecbaf78"]?.usd 
            if (price) {
                dispatch({ type: 'SET_XAU_PRICE', data: price });
            }
        } catch (e) {
            
        }
    }

    useEffect(() => {
        loadData();
        checkXAUPrice()
    }, []);


    return (
        <SnapshotContext.Provider value={snapshotContext}>
            <>
                {isLoading ? (
                    <div style={{ display: "flex", height: "100vh" }}>
                        <Spinner color="light" style={{ margin: "auto " }} />
                    </div>
                ) : (
                        children
                    )}
            </>
        </SnapshotContext.Provider>
    )
}


export default Provider