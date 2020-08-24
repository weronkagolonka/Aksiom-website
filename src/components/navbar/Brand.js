import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo-website-yellow.png';
import { mq } from '../../breakpoints';

const Brand = () => {
    return (
        <Image onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={logo} alt="Company-logo" />
    )
}

export default Brand

const Image = styled('img')`
    ${mq({
    height: ['35%', '35%', '50%', '50%'],
    margin: 'auto 0',
    cursor: 'pointer'
})};

`;