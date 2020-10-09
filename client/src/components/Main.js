import React , { useState } from 'react';
import styled from "styled-components";
import {
    Container
} from "reactstrap";

import SnapshotProvider from "../hooks/useSnapshot";
import Header from "./dashboard/Header"
import Stat from "./dashboard/Stat"
import Overview from "./dashboard/Overview"
import Charts from "./dashboard/Charts"
import PoolMetrics from "./dashboard/PoolMetrics"

const Wrapper = styled.div`
    min-height: 100vh;
    flex-grow: 1;
    
`;

export const PERIODS = {
    DAILY: "DAILY",
    HOURLY: "HOURLY"
}

const Main = () => {

    const [ period, setPeriod ] = useState(PERIODS.DAILY)
    
    return (
        <Wrapper>
            <Container>
                <SnapshotProvider>
                    <Header
                        period={period}
                        setPeriod={setPeriod}
                    />
                    <Stat/>
                    <Overview
                        period={period}
                    />
                    <Charts
                        period={period}
                    />
                    <PoolMetrics/>
                </SnapshotProvider>

            </Container>

        </Wrapper>
    )
}

export default Main;