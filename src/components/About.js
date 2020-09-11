import React from 'react';
import styled from 'styled-components';
import fotka_S from '../images/fotka_S.jpg';
import { mq } from '../breakpoints';

const About = React.forwardRef((props, ref) => {
    return (
        <MainContainer ref={ref}>
            <TitleBox>
                <Title>
                    O nas
                </Title>
            </TitleBox>
            <AboutBox>
                <PicContainer />
                <Spacer />
                <TextContainer>
                    <AboutText>
                        Pracuję z polskimi oraz zagranicznymi przedsiębiorcami już od ponad dziesięciu lat.
                        Ukończyłam studia magisterskie z Zarządzania Przedsiębiorstwem na Politechnice Radomskiej im. Kazimierza Pułaskiego
                        oraz studia podyplomowe z Rachunkowości na Wyższej Szkole Humanitas w Sosnowcu.
                        Oprócz tego regularnie podnoszę swoje kwalifikacje poprzez uczestnictwo w kursach oraz szkoleniach
                        dotyczących między innymi zmian w podatkach, profesjonalnej obsługi klienta, zasad pomocy publicznej przed i po wstąpieniu do Unii Europejskiej oraz doradztwa podatkowego.
                        Podczas mojej kariery zawodowej miałam okazję szlifować swoje umiejętności zarówno jako członek zespołów księgowych,
                        jak i ich kierownik. Cały ten bagaż doświadczeń sprawia, iż doskonale rozumiem jak zróżnicowane potrafią być potrzeby
                        dzisiejszych przedsiębiorców.
                    <br></br>
                        <br></br>
                    Nasze biuro jest lokalne, ale prężnie rozwijające się. Profesjonalizm i indywidualne podejście jest dla nas priorytetem. Jeżeli szukasz rzetelnego księgowego, który bezpiecznie poprowadzi Twoją działalność i w ludzki sposób wytłumaczy zawiłości polskiego systemu podatkowego, jesteś w dobrym miejscu.
                </AboutText>
                    <BossBox>
                        <Boss>
                            Anna Łukaszek<br></br> Prezes Zarządu
                    </Boss>
                    </BossBox>

                </TextContainer>
            </AboutBox>
        </MainContainer>
    );
})

export default About

const MainContainer = styled.div`

`;

const AboutBox = styled.div`
    ${mq({
    paddingLeft: ['24px', '24px', '48px', '48px'],
    paddingRight: ['24px', '24px', '48px', '48px'],
    paddingTop: ['24px', '24px', '48px', '48px'],
    paddingBottom: ['24px', '24px', '48px', '48px'],
    flexDirection: ['column', 'column', 'column', 'row'],
    alignItems: ['center', 'center', 'center', 'stretch'],
})};
    display: flex;
    justify-content: center;
`;

const PicContainer = styled.div`
    @media only screen and (min-width: 2500px) {
        background-size: contain;
    }
    order: 1;
    width: 40%;
    background-image: url(${fotka_S});
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
    border: 5px solid #D5992E;
    box-shadow: -20px 20px #D5992E;
    margin-left: 20px;
    margin-bottom: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 3;
    ${mq({
    width: ['100%', '100%', '100%', '60%'],
})};
`;

const Spacer = styled.div`
    order: 2;
    width: 10%;
`;

const AboutText = styled.p`
    text-align: justify;
    line-height: 1.5;
`;

const TitleBox = styled.div`
    ${mq({
    marginBottom: ['12px', '12px', '36px', '36px']

})};
    width: 100%;
    align-content: center;
`;

const Title = styled.h1`
    text-align: center;
`;

const BossBox = styled.div`
    padding-top: 30px;
    width: 100%;
    align-content: right;
`;

const Boss = styled.p`
    text-align: right;
    font-weight: bold;
`;



