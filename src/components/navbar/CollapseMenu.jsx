import React from "react";
import styled from "styled-components";
import { mq } from "../../breakpoints";
import { animated } from "react-spring";
import { sections } from "../../constants";

const CollapseMenu = (props) => {
    const { move } = props;

    if (props.navbarState === true) {
        return (
            <CollapseWrapper>
                <NavLinks>
                    <li>
                        <NavItem onClick={() => move(sections.ABOUT)}>
                            O nas
                        </NavItem>
                    </li>
                    <li>
                        <NavItem onClick={() => move(sections.SERVICES)}>
                            Oferta
                        </NavItem>
                    </li>
                    <li>
                        <NavItem onClick={() => move(sections.BANK_PRODUCTS)}>
                            Usługi bankowe
                        </NavItem>
                    </li>
                    <li>
                        <NavItem onClick={() => move(sections.CONTACT)}>
                            Kontakt
                        </NavItem>
                    </li>
                </NavLinks>
            </CollapseWrapper>
        );
    }
    return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
    ${mq({
        top: ["144px", "144px", "104px", "100px"],
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
            color: #d5992e;
        }
    }
`;

const NavItem = styled.a`
    text-decoration: none;
`;
