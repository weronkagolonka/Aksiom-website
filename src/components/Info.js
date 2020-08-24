import React from 'react';
import styled from 'styled-components';
import { mq } from '../breakpoints';

const Info = () => {
    return (
        <InfoBox >
            <InfoTitle>Kompleksowa obsługa Twojego przedsiębiorstwa</InfoTitle>
            <InfoSubtitle>
                Jednoosobowa działalność gospodarcza czy może spółka cywilna?
                Wraz z długoletnim doświadczeniem  w prowadzeniu działalności księgowo-doradczej
                potrafimy odpowiedzieć na potrzeby każdej firmy - niezależnie od jej złożoności, specyfiki czy też reprezentowanej branży.
                Świadczone przez nas usługi są zawsze dostosowywane indywidualnie z zachowaniem najwyższych standardów obsługi klienta.
                Służymy także pomocą osobom chcącym dopiero rozpocząć swoją działalność gospodarczą oraz firmom stawiającym pierwsze kroki na rynku.
                Dzięki współpracy z naszym biurem rachunkowym, możesz skupić się na swoim biznesie, a obsługę księgową pozostawić nam.
            </InfoSubtitle>
        </InfoBox>
    );
}

export default Info

const InfoBox = styled.div`
    width: 100%;
    ${mq({
    paddingTop: ['3rem', '3rem', '6rem', '6rem'],
    paddingBottom: ['3rem', '3rem', '6rem', '6rem'],

})};
`;

export { InfoBox }

const InfoTitle = styled.h1`
    ${mq({
    marginLeft: ['24px', '24px', '48px', '48px'],
    marginRight: ['24px', '24px', '48px', '48px'],
})};
    text-align: center;
`;

const InfoSubtitle = styled.p`
    ${mq({
    marginTop: ['24px', '24px', '48px', '48px'],
    marginLeft: ['24px', '24px', '48px', '48px'],
    marginRight: ['24px', '24px', '48px', '48px'],
    marginBottom: '0px',

})};
    text-align: justify;
    text-align-last: center;
    line-height: 1.666;
`;

//ż