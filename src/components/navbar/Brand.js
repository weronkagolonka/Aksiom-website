import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo-website-yellow.png';

const Brand = () => {
    return (
        <Image src={logo} alt="Company-logo" />
    )
}

export default Brand

const Image = styled.img`
    height: 80%;
    margin: auto 0;
`;