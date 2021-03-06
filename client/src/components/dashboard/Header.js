import React, { useContext } from 'react';
import styled from "styled-components";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import { SnapshotContext } from "../../hooks/useSnapshot";
import { colors } from "../../constants"

const Wrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 0px;
`;


const Brand = styled(Col)` 
    flex-direction: column;
    h3 { 
        font-weight: 600;
        font-size: 24px;
    }
    p { 
        font-size: 14px;
        color: ${colors.secondary};
    }
`;

const Switcher = styled(Col)`
    flex-direction: row;
    justify-content: flex-end;
    display: flex;
    height: 45px;
    
`


const Header = ({ period, setPeriod }) => {
    const { data } = useContext(SnapshotContext);
    const { stat } = data;
    return (
        <Wrapper>
            <Row>
                <Brand sm="6">
                    <h3>PerlinX Dashboard</h3>
                    <p>Last updated {`${new Date(stat.lastUpdatedTimestamp).toLocaleString()}`}</p>
                </Brand>
                <Switcher>
                    <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <ButtonGroup>
                            <Button onClick={() => setPeriod("DAILY")} outline={period !== "DAILY"} color="info" size="sm">Daily</Button>
                            <Button onClick={() => setPeriod("HOURLY")} outline={period !== "HOURLY"} color="info" size="sm">Hourly</Button>
                        </ButtonGroup>
                    </div>


                </Switcher>
            </Row>


        </Wrapper>
    )
}

export default Header;