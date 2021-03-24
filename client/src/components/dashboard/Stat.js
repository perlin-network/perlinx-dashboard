import React, { useContext, useMemo } from 'react';
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { SnapshotContext } from "../../hooks/useSnapshot";
import { colors, ALL_TIME_HIGH_APY } from "../../constants"

const Wrapper = styled.div`

`;

const Card = styled.div`
    flex-grow: 1;
    background-color: ${colors.cardBackground};
    min-height: 137px;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;

    flex-direction: row;
    

    div {
        width: 50%;
        padding-left: 20px;
        padding-right: 10px;
        padding-top: 10px;
        margin-top: auto;
        margin-bottom: auto;
        text-align: center;
        :not(:last-child) {
            border-right: 1px solid rgba(255,255,255,0.3);
        }
        
    }

    h3 {
        font-size: 14px;
        color: #B6D8F9;
        font-weight: 600;
    }

    p {
        font-size: 20px;
    }

    @media only screen and (max-width: 600px) {
        p {
            font-size: 14px;
        }
    }

`;


const Stat = () => {
    const { data, tvl, xauPrice } = useContext(SnapshotContext);
    // eslint-disable-next-line
    const { stat, feed, perlPrice, apy } = data;
    

    const { totalCollateral , totalMintedValue } = useMemo(() => {
        try {
            const lastItem = feed?.data?.hourly[feed.data.hourly.length - 1]
            
            let totalCollateral = 0
            let totalMintedValue = 0
            for (let synthetic of lastItem?.synthetics) {
                if ((synthetic.name).indexOf("pxGOLD") !== -1) {
                    totalMintedValue += Number(synthetic.totalMinted) * (xauPrice || 1600)
                }
                if ((synthetic.name).indexOf("pxUSD") !== -1) {
                    totalMintedValue += Number(synthetic.totalMinted)
                }
                // totalMinted += Number(synthetic.totalMinted)
                totalCollateral += Number(synthetic.totalCollateral) * (perlPrice || 0.03)
            }
            return {
                totalCollateral,
                totalMintedValue
            }
        } catch (e) {

        }
        return {
            totalCollateral:  0,
            totalMintedValue: 0
        }
    // }, [stat, feed])
    }, [ feed, perlPrice, xauPrice])
    

    return (
        <Wrapper>
            <Row>
                <Col sm="6">
                    <Card>
                        <div>
                            <h3>Minted Value</h3>
                            <p> ${`${Number(totalMintedValue).toLocaleString()}`}</p>
                        </div>
                        <div>
                            <h3>Total Collateral</h3>
                            <p> ${totalCollateral.toLocaleString()} </p>
                        </div>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <div style={{ width: "50%" }}>
                            <h3>Total Value Locked</h3>
                            <p>${`${Number(tvl).toLocaleString()}`}</p>
                        </div>
                        <div style={{ width: "50%" }}>
                            <h3>Total Volume</h3>
                            <p>${`${Number(stat.volume).toLocaleString()}`}</p>
                        </div>
                    </Card>
                </Col>
                
            </Row>
        </Wrapper>
    )

}

export default Stat