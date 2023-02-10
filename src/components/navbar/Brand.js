import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo-website-yellow.png';
import { mq } from '../../breakpoints';

const Brand = () => {
    return (
        <Container>
            <Image onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={logo} alt="Company-logo" />
        </Container>
    )
}

export default Brand

const Container = styled.div`
    ${mq({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: ['9rem', '9rem', '6.5rem', '6.5rem'],
})};
`;

const AwardImage = styled('img')`
    ${mq({
    height: ['35%', '30%', '50%', '70%'],
    marginLeft: ['1rem', '1rem', '1rem', '2rem'],
})};
`;

const Image = styled('img')`
    ${mq({
    height: ['35%', '35%', '50%', '50%'],
    margin: 'auto 0',
    cursor: 'pointer'
})};
`;
