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

const Wrapper = styled.div`
    background-color: ${colors.cardBackground};
`;


const Header = () => {
    

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


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