import React, { useContext, useMemo } from 'react';
import styled from "styled-components";
import {  Bar } from 'react-chartjs-2';
import { SnapshotContext } from "../../hooks/useSnapshot";
import { colors } from "../../constants"
import { PERIODS } from "../Main"

const Wrapper = styled.div`
    margin-top: 10px;
    min-height: 430px;
    background-color: ${colors.cardBackground};
    border-radius: 8px;
    padding: 20px;
    h3 {
        font-size: 18px; 
    }
`

// const options = {
//     responsive: true,
//     tooltips: {
//         mode: 'label'
//     },
//     elements: {
//         line: {
//             fill: false
//         }
//     },
//     scales: {
//         xAxes: [
//             {
//                 display: true,
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             }
//         ],
//         yAxes: [
//             {
//                 type: 'linear',
//                 display: true,
//                 position: 'left',
//                 id: 'y-axis-1',
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             },
//             {
//                 type: 'linear',
//                 display: true,
//                 position: 'right',
//                 id: 'y-axis-2',
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             }
//         ]
//     }
// };

// const plugins = [{
//     afterDraw: (chartInstance, easing) => {
//         const ctx = chartInstance.chart.ctx;
//         ctx.fillText("This text drawn by a plugin", 100, 100);
//     }
// }];

const Overview = ({ period }) => {
    const context = useContext(SnapshotContext);
    const { feed } = context.data;
    const { setTVL } = context


    const chartData = useMemo(() => {
        const hourly = feed.data.hourly.sort(function (a, b) {
            return a.timestamp - b.timestamp;
        });
        const daily = feed.data.daily.sort(function (a, b) {
            return a.timestamp - b.timestamp;
        });
        let labels = []
        let totalValueLockedData = []
        let totalVolumeData = []

        if (period === PERIODS.HOURLY) {
            labels = hourly ? hourly.map(item => new Date(item.timestamp).toLocaleTimeString()) : []
            totalValueLockedData = hourly ? hourly.map(item => Number(item.totalSize)) : []
            totalVolumeData = hourly ? hourly.map(item => Number(item.volumeLastHour)) : [] 
        } else {
            labels = daily ? daily.map(item => new Date(Number(item.timestamp)).toLocaleDateString()) : []
            totalValueLockedData =  daily ? daily.map(item => Number(item.totalSize)) : []
            totalVolumeData = daily ? daily.map(item => Number(item.volume)) : []
        }

        // const labels = daily ? daily.map(item => new Date(Number(item.timestamp)).toLocaleDateString()) : []
        // const totalValueLockedData = daily ? daily.map(item => Number(item.totalSize)) : []
        // const totalVolumeData = daily ? daily.map(item => Number(item.volume)) : []

        // looks for the latest TVL
        if (totalValueLockedData[0]) {
            setTVL(totalValueLockedData[totalValueLockedData.length - 1])
        }

        return {
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
                    data: totalValueLockedData
                },
                {
                    label: 'Trading volume (USD)',
                    type: 'bar',
                    backgroundColor: '#B6D8F9',
                    borderColor: '#B6D8F9',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                    hoverBorderColor: 'rgba(75,192,192,1)',
                    data: totalVolumeData
                }
            ]
        };
        // eslint-disable-next-line
    }, [feed, period])


    return (
        <Wrapper>
            <h3>Staking overview</h3>
            <Bar
                data={chartData}
                width={"100%"}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: "white",
                            // fontSize: 18
                        },
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
                            //   beginAtZero: true,
                            //   maxTicksLimit: 5,
                            //   stepSize: Math.ceil(250 / 5),
                            //   max: 250
                           }
                        }]
                     }
                }}
            />
        </Wrapper>
    )

}

export default Overview;
