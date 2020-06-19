import React from 'react';
import styled from 'styled-components';

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
                        <a href="/">oferta</a>
                        <a href="/">o nas</a>
                        <a href="/">kontakt</a>
                        <a href="/">przydatne linki</a>
                    </NavLinks>
                </FlexContainer>
            </Navbar>
        </>
    );
}

export default NavBar

const Navbar = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #ffffff;
    z-index: 1;
    font-size: 1.4rem;
`;

const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    margin: auto;
    paddig: 0 2rem;
    justify-content: space-between;
    height: 8.5rem;
    color: blue;
`;

const NavLinks = styled(animated.ul)`
    justify-self: end;
    list-style-type: none;
    margin: auto 0;

    & a {
        color: #000000;
        text-transform: uppercase;
        font-weight: 700;
        border-bottom: 1px solid transparent
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;
        display: inline-block;
        padding: 0 2rem;

        $:hover {
            color: #fdcb6e;
            border-bottom: 1px solid #fdcb6e;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
`;


