import React from 'react';
import styled from 'styled-components';


const Info = () => {
    return (
        <InfoBox>
            <InfoTitle>Kompleksowa obsługa Twojego przedsiębiorstwa</InfoTitle>
            <InfoSubtitle>
                Jednoosobowa działalność gospodarcza czy może spółka cywilna?
                Wraz z długoletnim doświadczeniem  w prowadzeniu działalności księgowo-doradczej
                potrafimy odpowiedzieć na potrzeby każdej firmy - niezależnie od jej złożoności, specyfiki czy też reprezentowanej branży.
                Świadczone przez nas usługi są zawsze dostosowywane indywidualnie z zachowaniem najwyższych standardów obsługi klienta. Służymy także pomocą osobom chcącym dopiero rozpocząć swoją działalność gospodarczą oraz firmom stawiającym pierwsze kroki na rynku. Dzięki współpracy z naszym biurem rachunkowym, możesz skupić się na prowadzeniu firmy, a obsługę księgową pozostawić nam.
            </InfoSubtitle>
        </InfoBox>
    );
}

export default Info

const InfoBox = styled.div`
    width: 100%;
    padding-top: 6rem;
    padding-bottom: 6rem;
`;

const InfoTitle = styled.h1`
    text-align: center;
`;

const InfoSubtitle = styled.p`
    margin: 48px;
    margin-bottom: 0px;
    text-align: center;
    line-height: 1.666;
`;

//ż