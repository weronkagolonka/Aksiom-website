import React from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import { mq } from '../../breakpoints';
import { useSpring, animated, config } from "react-spring";
import Brand from './Brand';
import Burgermenu from './BurgerMemu';
import CollapseMenu from './CollapseMenu';

const NavBar = (props) => {
    const { goTo } = props

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

    const HooverMenu = () => {

        return (
            <Menu>
                <MenuItem onClick={() => goTo('services1')}>
                    <MenuLink>Ryczałt od przychodów ewidencjonalnych</MenuLink>
                </MenuItem>
                <MenuItem onClick={() => goTo('services2')}>
                    <MenuLink>Podatkowa książka przychodów i rozchodów</MenuLink>
                </MenuItem>
                <MenuItem onClick={() => goTo('services3')}>
                    <MenuLink>Księgi handlowe</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink onClick={() => goTo('services4')}>Kadry i płace</MenuLink>
                </MenuItem>
            </Menu>
        );
    }

    return (
        <>
            <Navbar style={barAnimation}>
                <FlexContainer>
                    <Brand />
                    <NavLinks style={linkAnimation}>
                        <NavItem>
                            <NLink>oferta <FaAngleDown /></NLink>
                            <HooverMenu />
                        </NavItem>
                        <NavItem>
                            <NLink onClick={() => goTo('about')}>o nas</NLink>
                        </NavItem>
                        <NavItem>
                            <NLink onClick={() => goTo('contact')}>kontakt</NLink>
                        </NavItem>
                    </NavLinks>
                    <BurgerWrapper>
                        <Burgermenu navbarState={props.navbarState}
                            handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </Navbar>
            <CollapseMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
                move={props.goTo}
            />

        </>
    );
}



export default NavBar


const Menu = styled('ul')`
    list-style-type: none;
    display: none;
    position: absolute;
    top: 80%;
    left: 30px;
    background-color: #fff;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 10px;
    border-radius: 25px;
    border: 3px solid #D5992E;
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
    text-align: left;
    &:hover ${MenuLink} {
        font-weight: bold;
    }
`;


const Navbar = styled(animated.nav)`
    ${mq({
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    background: '#fff',
    zIndex: '1',
    fontSize: ['0.5rem', '0.5rem', '1rem', '1rem'],
})};
`;

const FlexContainer = styled('div')`
    ${mq({
    display: 'flex',
    marginLeft: ['24px', '24px', '48px', '48px'],
    marginRight: ['24px', '24px', '48px', '48px'],
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ['9rem', '9rem', '6.5rem', '6.5rem'],
})};
`;

const NavLinks = styled(animated.ul)`
    ${mq({
    display: 'flex',
    height: ['40%', '40%', '100%', '100%'],
    justifySelf: 'end',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 'auto 0',
})};
    @media (max-width: 768px) {
        display: none;
    }
`;

const NLink = styled.a`
    color: #000;
    text-decoration: none;
`;

const NavItem = styled('li')`
    ${mq({
    height: ['40%', '40%', '80%', '100%'],
    textTransform: 'uppercase',
    fontWeight: '700',
    border: 'none',
    transition: 'all 300ms linear 0s',
    cursor: 'pointer',
    display: 'inline-block',
    paddingTop: ['0.35rem', '0.35rem', '2.5rem', '2.5rem'],
    paddingLeft: ['0.25rem', '0.25rem', '3rem', '3rem'],
})};
    &:hover ${Menu} {
        display: block;
    }
    &:hover ${NLink} {
        color: #D5992E;
    }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
  `;




