import React from 'react';
import styled from 'styled-components';

const Services = () => {
    return (
        <div>
            <Title>
                Nasza oferta
            </Title>
            <MainBox>
                <BoxesRow>
                    <ServiceBox>
                        <Subtitle>
                            Ryczałt od przychodów ewidencjonowanych
                        </Subtitle>
                        <ServiceList>
                            <ListItem>
                                Kontrola dokumentów pod względem formalno rachunkowym
                            </ListItem>
                            <ListItem>
                                Prowadzenie ewidencji przychodów
                            </ListItem>
                            <ListItem>
                                Prowadzenie ewidencji dla potrzeb podatku VAT
                            </ListItem>
                            <ListItem>
                                Sporządzanie i dostarczanie do Urzędu Skarbowego miesięcznych lub kwartalnych deklaracji VAT
                            </ListItem>
                            <ListItem>
                                Sporządzanie i dostarczanie do Urzędu Skarbowego rocznych zeznań PIT-28
                            </ListItem>
                        </ServiceList>
                    </ServiceBox>
                    <Spacer></Spacer>
                    <ServiceBox>
                        <Subtitle>
                            Podatkowa książka przychodów i rozchodów
                        </Subtitle>
                    </ServiceBox>
                </BoxesRow>
                <BoxesRow>
                    <ServiceBox>
                        <Subtitle>
                            Księgi handlowe
                        </Subtitle>
                    </ServiceBox>
                    <Spacer></Spacer>
                    <ServiceBox>
                        <Subtitle>
                            Kadry i płace
                        </Subtitle>
                    </ServiceBox>
                </BoxesRow>
            </MainBox>
        </div>

    );
}

export default Services

const MainBox = styled.div`
    height: 800px;
    background-color: red;
    margin: 48px;
    margin-left: 100px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Title = styled.h1`
    padding-top: 48px;
    padding-bottom: 48px; 
    text-align: center;
`;

const BoxesRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 600px;
    width: 100%;
    align-items: sTableRowetch;
    justify-content: center;
`;

const ServiceBox = styled.div`
    flex: 50%;
    border-radius: 25px;
    background-color: #E5A424;
    width: 40%;
    height: auto;
    margin-bottom: 30px;
`;

const Spacer = styled.div`
    flex: 10%;
`;

const Subtitle = styled.h2`
    text-align: center;
    padding: 20px;
    color: #fff;
`;

const ServiceList = styled.ul`
    list-style-type: none;
    align-content: center;
`;

const ListItem = styled.li`
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 10px;
`;
