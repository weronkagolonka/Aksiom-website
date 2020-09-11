import React from 'react';
import styled from 'styled-components';
import { mq } from '../breakpoints';

const Services = React.forwardRef((props, ref) => {

    return (
        <Background>
            <Title>
                Nasza oferta
            </Title>
            <MainBox>
                <Row>
                    <Box ref={ref}>
                        <Subtitle>Ryczałt od przychodów ewidencjonowanych</Subtitle>
                    </Box>
                    <ServiceListRight>
                        <ListItem>Kontrola dokumentów pod względem formalno-rachunkowym</ListItem>
                        <ListItem>Prowadzenie ewidencji przychodów</ListItem>
                        <ListItem>Prowadzenie ewidencji dla potrzeb podatku VAT</ListItem>
                        <ListItem>Sporządzanie i dostarczanie do Urzędu Skarbowego miesięcznych lub kwartalnych deklaracji VAT</ListItem>
                        <ListItem>Sporządzanie i dostarczanie do Urzędu Skarbowego rocznych zeznań PIT-28</ListItem>
                    </ServiceListRight>
                </Row>
                <Spacer />
                <Row>
                    <Box>
                        <Subtitle>Podatkowa książka przychodów i rozchodów</Subtitle>
                    </Box>
                    <ServiceListRight>
                        <ListItem>Kontrola dokumentów pod względem formalno rachunkowym</ListItem>
                        <ListItem>Bieżąca ewidencja operacji gospodarczych</ListItem>
                        <ListItem>Prowadzenie ewidencji dla potrzeb podatku VAT</ListItem>
                        <ListItem>Prowadzenie ewidencji środków trwałych i wyposażenia</ListItem>
                        <ListItem>Sporządzanie i dostarczanie do Urzędu Skarbowego miesięcznych lub kwartalnych deklaracji VAT </ListItem>
                        <ListItem>Miesięczne lub kwartalne rozliczania podatku dochodowego</ListItem>
                        <ListItem>Sporządzanie i dostarczanie do Urzędu Skarbowego rocznych zeznań PIT-36, PIT-36L</ListItem>
                        <ListItem>Sporządzanie do GUS sprawozdań statystycznych</ListItem>
                    </ServiceListRight>


                </Row>
                <Spacer />
                <Row>
                    <Box>
                        <Subtitle>Księgi handlowe</Subtitle>
                    </Box>
                    <ServiceListRight>
                        <ListItem>Kontrola dokumentów pod względem formalno rachunkowym</ListItem>
                        <ListItem>Bieżąca ewidencja operacji gospodarczych</ListItem>
                        <ListItem>Prowadzenie księgi głównej, pomocniczej, ewidencji środków trwałych i wyposażenia oraz ewidencji dla podatku VAT</ListItem>
                        <ListItem>Sporządzanie i dostarczanie do Urzędu Skarbowego miesięcznych lub kwartalnych deklaracji VAT</ListItem>
                        <ListItem>Miesięczne rozliczenia podatku dochodowego</ListItem>
                        <ListItem>Sporządzanie sprawozdań statystycznych do GUS</ListItem>
                        <ListItem>Sporządzanie bilansu z rachunkiem zysków i strat, rachunkiem przepływów pieniężnych oraz przygotowywanie informacji dodatkowej</ListItem>
                        <ListItem>Sporządzanie i dostarczanie do Urzędu Skarbowego zeznania rocznego CIT-8</ListItem>
                        <ListItem>Bieżąca kontrola zobowiązań i należności, wystawianie potwierdzeń sald</ListItem>
                        <ListItem>Na dzień rozpoczęcia działalności otwieranie ksiąg handlowych wraz z utworzeniem Zakładowego Planu Kont</ListItem>
                        <ListItem>Sporządzanie polityki rachunkowości</ListItem>
                    </ServiceListRight>
                </Row>
                <Spacer />
                <Row>
                    <Box>
                        <Subtitle>Kadry i płace</Subtitle>
                    </Box>
                    <ServiceListRight>
                        <ListItem>Sporządzanie list płac, rachunków do umowy zlecenia oraz o dzieło, pasków do wypłaty oraz raportów RMUA</ListItem>
                        <ListItem>Wyliczanie wynagrodzeń za pracę w godzinach nocnych oraz nadliczbowych</ListItem>
                        <ListItem>Wyliczanie urlopów, odpraw i ekwiwalentów</ListItem>
                        <ListItem>Naliczanie miesięcznych zaliczek na podatek dochodowy pracowników, przygotowywanie przelewów do Urzędu Skarbowego</ListItem>
                        <ListItem>Wyliczanie miesięcznych składek ZUS, sporządzanie deklaracji oraz przesyłanie ich w formie elektronicznej do ZUS</ListItem>
                        <ListItem>Przygotowywanie zgłoszeń do ubezpieczenia społecznego i zdrowotnego podatników oraz pracowników</ListItem>
                        <ListItem>Sporządzanie informacji o uzyskanych przez pracowników dochodach i pobranych zaliczkach na podatek dochodowy PIT-11, PIT-8B</ListItem>
                        <ListItem>Sporządzanie i dostarczanie do GUS sprawozdań dotyczących danych kadrowych</ListItem>
                    </ServiceListRight>

                </Row>
            </MainBox>
        </Background>

    );
})

export default Services

//E5B523

const Background = styled.div`
    ${mq({
    paddingTop: ['12px', '12px', '48px', '48px'],
    paddingBottom: ['12px', '12px', '48px', '48px'],
})}
    background-color: #f8f8f8;
`;

const MainBox = styled.div`
    ${mq({
    marginLeft: ['24px', '24px', '48px', '48px', '666px'],
    marginRight: ['24px', '24px', '48px', '48px', '666px'],
    marginTop: ['24px', '24px', '48px', '48px', '48px'],
    marginBottom: ['24px', '24px', '48px', '48px', '48px'],

})};
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Title = styled.h1`
    text-align: center;
    color: #000;
    margin-top: 36px;
    ${mq({
    paddingBottom: ['24px', '24px', '48px', '48px']
})};
`;

const Row = styled.div`
    ${mq({
    flexDirection: ['column', 'column', 'row', 'row'],
})};
    display: flex;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Spacer = styled.div`
    ${mq({
    height: ['48px', '48px', '96px', '96px']
})};
`;

const Box = styled.div`
    ${mq({
    width: ['80%', '80%', '350px', '50%'],
    marginBottom: ['40px', '40px', '20px', '20px'],
    marginLeft: ['15px', '15px', '20px', '20px'],
    alignSelf: ['center', 'center', 'baseline', 'baseline'],
    height: ['100px', '100px', '200px', '200px'],
    padding: ['12px', '12px', '0px', '0px']
})};
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 5px solid #D5992E;
    border-radius: 25px;
    box-shadow: -20px 20px #D5992E;
`;

const Subtitle = styled.h2`
    ${mq({
    fontSize: ['1rem', '1rem', '1.5rem', '2rem']
})};
    text-align: center;
    color: #000;
`;

const ServiceListRight = styled.ul`
    ${mq({
    flex: ['100%', '100%', '60%', '60%'],
    paddingLeft: ['0px', '0px', '48px', '72px'],
})};
    list-style-type: none;
    align-content: center;
`;

const ListItem = styled.li`
    ${mq({
    textAlign: ['center', 'center', 'left', 'left'],
    fontSize: ['0.75rem', '0.75rem', '1.1rem', '1.25rem'],
    marginRight: ['0px', '0px', '20px', '48px']
})};
    font-family: 'Source Sans Pro', sans-serif;
    padding:10px;
    color: #000;
`;
