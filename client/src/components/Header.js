import React, { useState } from 'react';
import styled from "styled-components";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import Logo from "../assets/PerlinX-Logo.svg";
import { colors } from "../constants";
import Button from "./ui/Button"

const Wrapper = styled.div`
    background-color: ${colors.cardBackground};
`;


const Header = () => {
    

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <Wrapper>
            <Container fluid>
                <Navbar dark expand="md">
                    <NavbarBrand href="/">
                        <img alt="logo" src={Logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            
                            <NavItem>
                                <NavLink href="http://app.perlinx.finance/">
                                    <Button>
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