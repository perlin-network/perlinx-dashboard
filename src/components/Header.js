import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {
    Collapse,
    Navbar,
    Button,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from 'reactstrap';
import Logo from "../assets/PerlinX-Logo.svg";
import { colors } from "../constants";
import {
    useWeb3React,
    UnsupportedChainIdError
} from "@web3-react/core";
import { injected } from "../connector"
import { truncate } from "../utils/string"
import useWallet from "../hooks/useWallet"


const Wrapper = styled.div`
    background-color: ${colors.cardBackground};
`;

const connectorsByName = {
    Injected: injected
};

const Header = () => {
    // Initialize Web3 wallet
    const context = useWeb3React();
    const {
        connector,
        library,
        chainId,
        account,
        activate,
        deactivate,
        active,
        error
    } = context;

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { connect } = useWallet()

    return (
        <Wrapper>
            <Container>
                <Navbar dark expand="md">
                    <NavbarBrand href="/">
                        <img src={Logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="http://app.perlinx.finance/">
                                    Go to app
                                </NavLink>
                            </NavItem>
                            {account
                                ?
                                <Button
                                    style={{ 
                                        marginLeft: 20,
                                        cursor: "default"
                                    }}
                                    color="info"
                                    outline
                                >
                                    {truncate(account)}
                                </Button>
                                :
                                <Button
                                    style={{ marginLeft: 20 }}
                                    onClick={connect}
                                    color="info">
                                    Connect Wallet
                                </Button>
                            } */}
                            <NavItem>
                                <NavLink href="http://app.perlinx.finance/">
                                    <Button
                                        color="info">
                                        Trade Now
                                </Button>
                                </NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>
            </Container>
        </Wrapper>
    )
}

export default Header;