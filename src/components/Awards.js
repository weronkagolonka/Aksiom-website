import React from 'react';
import styled from 'styled-components';
import nagroda from '../images/nagroda.png';
import rzetelnaFirmaLogo from '../images/rzetelnaFirmaLogo.png';
import kapitalnaFirma from '../images/kapitalnaFirma.jpg';
import { mq } from '../breakpoints';

const Awards = (props) => {
    return (
        <MainContainer>
            <AwardsBox>
                <AwardImage src={nagroda} alt="Company-award"/>
                <AwardImage src={kapitalnaFirma} alt="program-paricipation" />
                <a href="https://wizytowka.rzetelnafirma.pl/OIEWPGZQ" target="_blank" rel="noreferrer">
                    <AwardImage src={rzetelnaFirmaLogo} alt="certification" />
                </a>
            </AwardsBox>
        </MainContainer>
    )
}

export default Awards

const MainContainer = styled.div`
    ${mq({
        paddingBottom: ['0rem', '0rem', '3rem', '3rem', '3rem']
    })}
`;

const AwardImage = styled('img')`
    height: 80px;
    padding: 0 3rem;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 3rem;
`;

const AwardsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;