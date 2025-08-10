import React from 'react';
import styled from "styled-components";

const Burgermenu = (props) => {
    return (
        <Wrapper onClick={props.handleNavbar}>
            <div className={props.navbarState ? "open" : ""}>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
        </Wrapper>
    );
}

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: .3rem;
  cursor: pointer;
  display: block;

  & span {
    background: #D5992E;
    display: block;
    position: relative;
    width: 2rem;
    height: .18rem;
    margin-bottom: .25rem;
    transition: all ease-in-out 0.2s;
    border-radius: 10px;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -6px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 8px;
  }

`;