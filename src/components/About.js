import React from 'react';
import styled from 'styled-components';
import emoji from '../images/emoji.jpg';

const About = React.forwardRef((props, ref) => {
    return (
        <div style={{ 'marginBottom': '48px', }} ref={ref}>
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
        </div>
    );
})

export default About

const AboutBox = styled.div`
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    height: 675px;
`;

const PicContainer = styled.div`
    order: 1;
    width: 40%;
    background-image: url(${emoji});
    background-position: center top;
    background-size: auto;
    background-repeat: no-repeat;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 3;
    width: 60%;
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



