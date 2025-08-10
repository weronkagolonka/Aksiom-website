import React from 'react';
import styled from 'styled-components';
import nagroda from '../images/nagroda.png';
import rzetelnaFirmaLogo from '../images/rzetelnaFirmaLogo.png';
import kapitalnaFirma from '../images/kapitalnaFirma.jpg';
import { mq } from '../breakpoints';

const Awards = (props) => {
    return (
        <div>
            <AwardsBox>
                <AwardImage src={nagroda} alt="Company-award"/>
                <AwardImage src={kapitalnaFirma} alt="program-paricipation" />
                <a href="https://wizytowka.rzetelnafirma.pl/OIEWPGZQ" target="_blank" rel="noreferrer">
                    <AwardImage src={rzetelnaFirmaLogo} alt="certification" />
                </a>
            </AwardsBox>
        </div>
    )
}

export default Awards

const AwardImage = styled('img')`
    height: 80px;
    padding: 0 3rem;
`;

const AwardsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;