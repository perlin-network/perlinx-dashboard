import React, { useContext } from 'react';
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { SnapshotContext } from "../../hooks/useSnapshot";
import { colors , ALL_TIME_HIGH_APY } from "../../constants"

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
    const { data, apy } = useContext(SnapshotContext);

    const { stat } = data;

    // const apy = (1000000/ (stat.totalPerlStaked * 2)) * 52 * 100

    return (
        <Wrapper>
            <Row>
                <Col sm="5">
                    <Card>
                        <div style={{ width: "37.5%" }}>
                            <h3>Total Value Locked</h3>
                            <p>${`${Number(stat.totalSize).toLocaleString()}`}</p>
                        </div>
                        <div style={{ width: "37.5%" }}>
                            <h3>Total Volume</h3>
                            <p>${`${Number(stat.volume).toLocaleString()}`}</p>
                        </div>
                        <div style={{ width: "25%" }}>
                            <h3>Total Users</h3>
                            <p>{stat.totalUsers}</p>
                        </div>
                    </Card>

                </Col>
                <Col sm="3">
                    <Card>
                        <div>
                            <h3>Current APY</h3>
                            <p>{apy.toFixed(2)}% </p>
                        </div>
                        <div style={{ paddingRight: 0 }}>
                            <h3>APY All-time high</h3>
                            <p>{ALL_TIME_HIGH_APY}%</p>
                        </div>
                    </Card>

                </Col>
                <Col sm="4">
                    <Card>
                        <div>
                            <h3>Current Rewards</h3>
                            <p>{`${(Number(stat.currentReward)).toFixed(2)} PERL`}</p>
                        </div>
                        <div>
                            <h3>Total PERL Rewards</h3>
                            <p>{`${Number(1000000).toFixed(0)} PERL`}</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Wrapper>
    )

}

export default Stat