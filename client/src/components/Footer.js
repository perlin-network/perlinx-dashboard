import React from 'react';
import styled from "styled-components";
import {
    Container,
    Nav,
    NavLink
} from 'reactstrap';
import { colors } from "../constants";

const Wrapper = styled.div`
    background-color: ${colors.cardBackground};
    color: ${colors.secondary};
    min-height: 245px;
    width: 100%;

    .nav {
        font-size: 14px;
        line-height: 20px;
        a {
            color: ${colors.secondary};
        }
        padding-bottom: 20px;
    }

`;


const Disclamer = styled.div`
    padding-top: 40px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: 600;
    max-width: 800px;
`;

const Divider = styled.hr`
    height: 2px;
    color: rgba(255,255,255,0.1);
    background-color: rgba(255,255,255,0.1);
`;


const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Disclamer>
                    <p>DISCLAIMER: This PerlinX Dashboard is merely provided as a free tool for the convenience of users. The data displayed is drawn from a combination of sources, some of which are 3rd-party sources not under the control of PerlinX. Therefore, we do not guarantee the accuracy or currency of any data displayed on the Dashboard and PerlinX interface. We strongly recommend users to do their own independent research, checks and due diligence on any data displayed before making any decisions to participate on PerlinX. The data displayed should also not be considered investment advice of any kind.</p>

                </Disclamer>
                <Divider />
                <Nav className="nav">
                    <NavLink href="https://perlin-network.gitbook.io/perlin-community/perlinx-guide">User guide</NavLink>
                    <NavLink href="https://perlinx.finance/risks">Risks</NavLink>
                    <NavLink target="_blank" href="https://discord.gg/j2gS9fv">Discord</NavLink>
                    <NavLink href="https://app.perlinx.finance" style={{ marginLeft: "auto" , color: "#19DED1"}}>Go to app</NavLink>
                </Nav>
            </Container>

        </Wrapper>
    )
}

export default Footer;