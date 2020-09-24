import React, { useContext, useMemo } from 'react';
import styled from "styled-components";
import { Line, Pie } from 'react-chartjs-2';
import { Row, Col } from "reactstrap";
import { SnapshotContext } from "../../hooks/useSnapshot";
import { colors } from "../../constants"
import { PERIODS } from "../Main"
import RewardCard from "./RewardCard"
import GasCard from './GasCard';

const Wrapper = styled.div`
    
`

const StyledCol = styled(Col)`
    padding: 0px;
    
`

const Dot = styled.div`
    height: 25px;
    width: 25px;
    background-color: ${props => props.color && `${props.color}`};
    border-radius: 50%;
    display: inline-block;
`

const Card = styled.div`
    background-color: ${colors.cardBackground};
    border-radius: 8px; 
    min-height: 430px;
    margin: 15px;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 20px;

    h3 {
        font-size: 18px; 
    }
    h4 { 
        font-size: 14px;
        color: #B6D8F9;
    }
    p {
        font-size: 14px;
        color: #fff;
    }

    .font-large {
        font-size: 18px;
    }

`

const PoolLiquidity = styled.div`
    font-size: 16px;
    flex-direction: row;
    display: flex;
    height: 35px; 
    div {
        flex: 40%; 
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`

// const APYCard = styled(Card)`

// `

const APYChartWrapper = styled.div`
    padding-top: 60px;
    @media only screen and (max-width: 600px) {
        padding-top: 100px;
    }

`


const Charts = ({ period }) => {

    const context = useContext(SnapshotContext);
    const { feed } = context.data;

    const { pieData, pieSideData, apyData } = useMemo(() => {

        let poolNames = [];
        let poolSizes = [];
        let pieSideData = [];
        let labels = [];
        let apys = [];
        // let pools = []

        try {
            const lastItem = feed.data.hourly[feed.data.hourly.length - 1]
            poolNames = lastItem ? lastItem.pools.map((item) => item.name) : []
            poolSizes = lastItem ? lastItem.pools.map((item) => Number(item.poolSize)) : []
            // poolNames.map((label, index) => {
            //     pieSideData.push({
            //         name: label,
            //         size: poolSizes[index]
            //     })

            // })
            let count = 0;
            for (let label of poolNames) {
                pieSideData.push({
                    name: label,
                    size: poolSizes[count]
                })
                count += 1
            }

        } catch (e) {

        }



        try {

            if (period === PERIODS.HOURLY) {
                const hourly = feed.data.hourly.sort(function (a, b) {
                    return a.timestamp - b.timestamp;
                });
                labels = hourly ? hourly.map(item => new Date(Number(item.timestamp)).toLocaleTimeString()) : []
                apys = hourly ? hourly.map(item => {
                    const apy = (1000000 / (item.totalPerlStaked * 2)) * 52 * 100
                    return apy;
                }) : []
            } else {
                // Filter the first 6 days out as we had changed the reward distribution period
                const daily = feed.data.daily.sort(function (a, b) {
                    return a.timestamp - b.timestamp;
                }).filter(item => ["1598572800000", "1598486400000", "1598400000000", "1598313600000", "1598140800000", "1598227200000"].indexOf(item.timestamp) === -1)
                labels = daily ? daily.map(item => new Date(Number(item.timestamp)).toLocaleDateString()) : []
                apys = daily ? daily.map(item => {
                    const apy = (1000000 / (item.totalPerlStaked * 2)) * 52 * 100
                    return apy;
                }) : []
            }

        } catch (e) {

        }

        return {
            pieData: {
                labels: poolNames,
                datasets: [{
                    data: poolSizes,
                    backgroundColor: [
                        '#65D6D2',
                        '#8FD9ED',
                        '#5AAEE1',
                        "#5181FD",
                        "#6C79FB"
                    ]
                }]
            },
            pieSideData,
            apyData: {
                labels: labels,
                datasets: [
                    {
                        label: 'Total value locked (USD)',
                        type: 'line',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: apys
                    }
                ]
            }
        }
    }, [feed, period])

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }],
        options: {
            legend: {
                display: false
            },
        }
    };

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

    return (
        <Wrapper>
            <Row>
                <StyledCol sm="6">
                    <Card>
                        <h3>Pool liquidity</h3>
                        <Row>
                            <Col sm="6">
                                <Pie
                                    data={pieData}
                                    width={"100%"}
                                    options={
                                        {
                                            legend: {
                                                display: false
                                            },
                                            tooltips: {
                                                callbacks: {
                                                    label: function (tooltipItem) {
                                                        return tooltipItem.yLabel;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                />
                            </Col>
                            <Col sm="6" style={{ display: "flex" }}>
                                <div style={{ marginTop: "auto", marginBottom: "auto", width: "100%" }}>
                                    {pieSideData.map((row, index) => {
                                        return (
                                            <PoolLiquidity key={index}>
                                                <div style={{ flex: "10%" }}>
                                                    <Dot color={getDotColor(index)} />
                                                </div>
                                                <div >
                                                    {row.name}
                                                </div>
                                                <div>
                                                    ${(Number(row.size)).toLocaleString()}
                                                </div>
                                            </PoolLiquidity>
                                        )
                                    })}
                                </div>

                            </Col>
                        </Row>
                    </Card>
                </StyledCol>
                <StyledCol sm="6" className="d-none d-sm-block">
                    <Card >
                        <h3>Historical APY</h3>
                        <APYChartWrapper>
                            <Line
                                data={apyData}
                                options={
                                    {
                                        // maintainAspectRatio: false,
                                        legend: {
                                            display: false
                                        },
                                        tooltips: {
                                            callbacks: {
                                                label: function (tooltipItem) {
                                                    return tooltipItem.yLabel;
                                                }
                                            }
                                        },
                                        scales: {
                                            xAxes: [{
                                                ticks: {
                                                    fontColor: "white",
                                                }
                                            }],
                                            yAxes: [{
                                                ticks: {
                                                    fontColor: "white",
                                                }
                                            }]
                                        }
                                    }
                                }
                            />
                        </APYChartWrapper>
                    </Card>
                </StyledCol>
            </Row>
            <Row>
                <StyledCol sm="6">
                    <Card >
                        <RewardCard />
                    </Card>
                </StyledCol>
                <StyledCol sm="6">
                    <Card>
                        <GasCard />
                    </Card>
                </StyledCol>
            </Row>
        </Wrapper>
    )
}

export default Charts