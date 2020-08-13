import React from 'react';
import styled from 'styled-components';

const Services = () => {
    return (
        <Background>
            <Title>
                Nasza oferta
            </Title>
            <MainBox>
                <Row>
                    <Box>
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
}

export default Services

const Background = styled.div`
    background-color: #E5B523;
    padding-top: 48px;
    padding-bottom: 48px;
`;

const MainBox = styled.div`
    height: auto;
    margin: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Title = styled.h1`
    text-align: center;
    color: #fff;
    margin-top: 36px;
    padding-bottom: 48px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Spacer = styled.div`
    height: 96px;
`;

const Box = styled.div`
    height: 200px;
    width: 50%;
    display: flex;
    align-self: baseline;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 5px solid #D5992E;
    border-radius: 25px;
    box-shadow: -20px 20px #D5992E;
    margin-bottom: 20px;
    margin-left: 20px;
`;

const Subtitle = styled.h2`
    text-align: center;
    color: #000;
`;

const ServiceListRight = styled.ul`
    flex: 60%;
    list-style-type: none;
    align-content: center;
    padding-left: 72px;
`;

const ListItem = styled.li`
    text-align: left;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    padding:10px;
    color: #fff;
`;
