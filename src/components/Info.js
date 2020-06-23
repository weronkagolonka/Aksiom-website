import React from 'react';
import styled from 'styled-components';


const Info = () => {
    return (
        <InfoBox>
            <InfoTitle>Kompleksowa obsługa Twojego przedsiębiorstwa</InfoTitle>
            <InfoSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et aliquam velit. Maecenas sit amet augue non felis luctus sollicitudin. Nunc ut molestie libero, sit amet ullamcorper enim. Nunc ante est, auctor at nulla sed, vestibulum elementum ligula. Morbi vitae mollis felis, eu cursus dui. Phasellus ac tortor ligula. Sed augue augue, congue ac laoreet in, venenatis sed quam. Nulla accumsan sapien eu ipsum dictum lacinia.</InfoSubtitle>
        </InfoBox>
    );
}

export default Info

const InfoBox = styled.div`
    width: 100%;
    padding-top: 6.5rem;
    padding-bottom: 6.5rem;
`;

const InfoTitle = styled.h1`
    text-align: center;
`;

const InfoSubtitle = styled.p`
    margin: 48px;
    text-align: center;
    line-height: 1.666;
`;