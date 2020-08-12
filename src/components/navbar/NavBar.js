import React from 'react';
import styled from 'styled-components';

import { FaAngleDown } from 'react-icons/fa';

import { useSpring, animated, config } from "react-spring";

import Brand from './Brand';

const NavBar = (props) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <>
            <Navbar style={barAnimation}>
                <FlexContainer>
                    <Brand />
                    <NavLinks style={linkAnimation}>
                        <NavItem>
                            <NLink href="/">oferta <FaAngleDown /></NLink>
                            <HooverMenu />
                        </NavItem>
                        <NavItem>
                            <NLink href="/">o nas</NLink>
                        </NavItem>
                        <NavItem>
                            <NLink href="/">kontakt</NLink>
                        </NavItem>
                        <NavItem>
                            <NLink href="/">przydatne linki</NLink>
                        </NavItem>
                    </NavLinks>
                </FlexContainer>
            </Navbar>
        </>
    );
}

const HooverMenu = () => {

    return (
        <Menu>
            <MenuItem>
                <MenuLink href="/">Ryczałt od przychodów ewidencjonalnych</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink href="/">Podatkowa książka przychodów i rozchodów</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink href="/">Księgi handlowe</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink href="/">Kadry i płace</MenuLink>
            </MenuItem>
        </Menu>
    );
}

export default NavBar


const Menu = styled.ul`
    list-style-type: none;
    display: none;
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: #fff;
    width: 350px;
    padding-top: 30px;
    border-radius: 25px;
    box-shadow: -10px 10px #D5992E;
`;

const MenuLink = styled.a`
    border-bottom: 1px solid #000;
    color: #000;
    text-decoration: none;
    border: none;
    font-family: 'Source Sans Pro';
    font-weight: normal;
    text-transform: none;
`;

const MenuItem = styled.li`
    padding-left: 1rem;
    padding-bottom: 1rem;
    &:hover ${MenuLink} {
        font-weight: bold;
    }
`;


const Navbar = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #ffffff;
    z-index: 1;
    font-size: 1rem;
`;

const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    margin: auto;
    padding: 0 3rem;
    justify-content: space-between;
    height: 6.5rem;
`;

const NavLinks = styled(animated.ul)`
    justify-self: end;
    list-style-type: none;
    margin: auto 0;
`;

const NLink = styled.a`
    color: #000;
    text-decoration: none;
`;

const NavItem = styled.li`
    text-transform: uppercase;
    font-weight: 700;
    border-bottom: 1px solid transparent
    transition: all 300ms linear 0s;
    cursor: pointer;
    display: inline-block;
    padding: 0 0 0 3rem;
    &:hover ${Menu} {
        display: block;
    }
    &:hover ${NLink} {
        color: #D5992E;
    }
`;




