import React from 'react';
import styled from 'styled-components';
import anna from '../images/anna.jpg';
import { mq } from '../breakpoints';

const About = React.forwardRef((props, ref) => {
    return (
        <MainContainer ref={ref}>
            <TitleBox>
                <Title>
                    Nasz zespół
                </Title>
            </TitleBox>
            <AboutBox>
                <Team>
                    <Employee>
                        <PicContainer picture={anna} />
                        <div style={{textAlign: 'center'}}>
                            <p style={{fontWeight: '900'}}>Anna Łukaszek</p>
                            <p>Prezes zarządu</p>
                        </div>
                    </Employee>
                </Team>
                <Spacer />
                <TextContainer>
                    <AboutText>
                        Współpracujemy z polskimi oraz zagranicznymi przedsiębiorcami już od ponad dziesięciu lat.
                        Oprócz wykształcenia kierunkowego i studiów podyplomowych, regularnie podnosimy nasze kwalifikacje poprzez uczestnictwo w kursach oraz szkoleniach
                        dotyczących między innymi zmian w podatkach, profesjonalnej obsługi klienta, zasad pomocy publicznej przed i po wstąpieniu do Unii Europejskiej oraz doradztwa podatkowego.
                        Nasi specjaliści mieli okazję szlifować swoje umiejętności zarówno jako członkowie zespołów księgowych,
                        jak i ich kierownicy. Cały ten bagaż doświadczeń sprawia, iż doskonale rozumiemy jak zróżnicowane potrafią być potrzeby
                        dzisiejszych przedsiębiorców.
                    <br></br>
                    <br></br>
                    Nasze biuro jest lokalne, ale prężnie rozwijające się. 
                    Profesjonalizm i indywidualne podejście jest dla nas priorytetem. 
                    Jeżeli szukasz rzetelnego księgowego, który bezpiecznie poprowadzi Twoją działalność 
                    i w ludzki sposób wytłumaczy zawiłości polskiego systemu podatkowego, jesteś w dobrym miejscu.
                </AboutText>
                </TextContainer>
            </AboutBox>
        </MainContainer>
    );
})

export default About

const MainContainer = styled.div`
    ${mq({
        marginTop: ['3rem', '3rem', '6rem', '6rem', '6rem']
    })}
    margin-top: 6rem;
`;

const AboutBox = styled.div`
    ${mq({
    paddingLeft: ['24px', '24px', '48px', '48px', '354px', '666px'],
    paddingRight: ['24px', '24px', '48px', '48px', '354px', '666px'],
    paddingTop: ['24px', '24px', '48px', '48px'],
    paddingBottom: ['24px', '24px', '48px', '48px'],
    flexDirection: ['column', 'column', 'column', 'column'],
})};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Team = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    gap: 120px;
    margin-bottom: 48px;
`;

const Employee = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const PicContainer = styled.div`
    ${mq({
    display: ['none', 'none', 'none', 'block', 'block'],
})};
    width: 20%;
    height: 240px;
    background-image: url(${(props) => props.picture});
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
    width: 100%;
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



