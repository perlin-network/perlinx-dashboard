import React, { useContext, useState, useEffect } from 'react';
import { REWARD_FREQUENCY } from "../../constants"
import { SnapshotContext } from "../../hooks/useSnapshot"

const GasCard = () => {


    const [gasData, setGasData] = useState()
    // const [recoverFee, setRecoverFee] = useState(0)
    const { data } = useContext(SnapshotContext);
    const { feed } = data;

    useEffect(() => {
        try {
            const lastItem = feed.data.hourly[feed.data.hourly.length - 1]

            let { gasData } = lastItem;
            
            if (!gasData.safeLow) {
                gasData = feed.data.hourly[feed.data.hourly.length - 2].gasData
            }
            // FIXME: FIX ON THE BACKEND AND RE-WRITE ALL ENTRIES IN DYNAMODB
            setGasData({
                ...gasData,
                safeLow : (gasData.safeLow / 10),
                claimRewardFee : (gasData.claimRewardFee/ 10),
                equivalentGasFee : (gasData.equivalentGasFee / 10)
            })
            // if (Object.keys(rewardPerHundredPerl).length > 0) {
            //     const recoverFee = gasData ? ((Number(gasData.equivalentGasFee) / rewardPerHundredPerl[Object.keys(rewardPerHundredPerl)[0]]) * 100) : 0
            //     setRecoverFee(recoverFee)
            // }
        } catch (e) {

        }

    // }, [feed, rewardPerHundredPerl])
    }, [feed])

    return (
        <>
            <h3>Gas details for rewards</h3>
            <div style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: 30
            }}>
                <div>
                    <h4>Reward Frequency</h4>
                    <p className="font-large">
                        {REWARD_FREQUENCY}
                    </p>
                </div>
                {/* <div style={{ marginLeft: 40 }}>
                    <h4>PERL to stake for recovering gas fee</h4>
                    <p className="font-large">{`${recoverFee.toFixed(2)}`} PERL</p>
                </div> */}
            </div>
            {[
                { key: "Gas used to claim", value: gasData ? Math.floor(gasData.gasUsed) : 0 },
                { key: "SafeLow Gas price ", value: gasData ? `${(gasData.safeLow)} Gwei` : "0 Gwei" },
                { key: "Claim reward fee", value: gasData ? `${(Number(gasData.claimRewardFee).toFixed(8))} ETH` : "0 ETH" },
                { key: "PERL / ETH", value: gasData ? (Number(gasData.perlEthRatio).toFixed(8)) : 1 },
                { key: "Equivalent gas fee", value: gasData ? `${(Number(gasData.equivalentGasFee).toFixed(2))} PERL` : "0 PERL" },
            ].map(({ key, value }, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10
                        }}
                    >
                        <div style={{ flex: "50%" }}>
                            <h4>
                                {key}
                            </h4>

                        </div>
                        <div style={{ flex: "50%", textAlign: "right" }}>
                            <p>
                                {value}
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    )

}

export default GasCard;