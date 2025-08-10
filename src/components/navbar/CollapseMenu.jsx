import React from 'react';
import styled from 'styled-components';
import { mq } from '../../breakpoints';
import { animated } from 'react-spring';
//useSpring

const CollapseMenu = (props) => {
    //const { open } = useSpring({ open: props.navbarState ? 0 : 1 });
    const { move } = props

    if (props.navbarState === true) {
        return (
            //fix react state memory leak
            /*
            <CollapseWrapper style={{
                transform: open.interpolate({
                    range: [0, 0.2, 0.3, 1],
                    output: [0, -20, 0, -200],
                }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
            }}
            >
            */
            <CollapseWrapper>
                <NavLinks>
                    <li><NavItem onClick={() => move('accounting-services')}>Oferta</NavItem></li>
                    <li><NavItem onClick={() => move('about')}>O nas</NavItem></li>
                    <li><NavItem onClick={() => move('contact')}>Kontakt</NavItem></li>
                </NavLinks>
            </CollapseWrapper>
        );
    }
    return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
    ${mq({
    top: ['144px', '144px', '104px', '100px']
})};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    opacity: 1;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    `;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  text-align: center;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #D5992E;
    }
  }
`;

const NavItem = styled.a`
    text-decoration: none;

`;
