import React from "react";
import styled from "styled-components";
import { mq } from "../breakpoints";
import { colors, sizes } from "../styles/constants";
import { config } from "../config";

export const BankProducts = React.forwardRef((_props, ref) => {
    return (
        <MainBox>
            <Title ref={ref}>Oferta bankowa dla klientów</Title>
            <BankOffer>
                <p style={{ textAlign: "center" }}>
                    Biuro Rachunkowe Aksiom współpracuje z <b>Alior Bank</b>,
                    oferując swoim klientom korzystne warunki na wybrane
                    produkty.
                    <br />
                    Zapraszamy do zapoznania się ze szczegółami:
                </p>
                <Products>
                    <ProductColumn>
                        <ProductBox>
                            <ProductName>iKonto Biznes</ProductName>
                        </ProductBox>
                        <BankProductActions>
                            <ActionLink
                                href={config.aliorAfilliation.accountOfferUrl}
                                target="_blank"
                            >
                                Szczegóły oferty (PDF)
                            </ActionLink>
                            <Button
                                onClick={() =>
                                    window.open(
                                        config.aliorAfilliation
                                            .accountApplicationUrl,
                                        "_blank"
                                    )
                                }
                            >
                                Otwórz konto
                            </Button>
                        </BankProductActions>
                    </ProductColumn>
                    <ProductColumn>
                        <ProductBox>
                            <ProductName>Szybki kredyt firmowy</ProductName>
                        </ProductBox>
                        <BankProductActions>
                            <ActionLink
                                href={config.aliorAfilliation.loanOfferUrl}
                                target="_blank"
                            >
                                Szczegóły oferty (PDF)
                            </ActionLink>
                            <Button
                                onClick={() =>
                                    window.open(
                                        config.aliorAfilliation
                                            .loanApplicationUrl,
                                        "_blank"
                                    )
                                }
                            >
                                Złóż wniosek o kredyt
                            </Button>
                        </BankProductActions>
                    </ProductColumn>
                </Products>
            </BankOffer>
        </MainBox>
    );
});

const MainBox = styled.div`
    ${mq({
        paddingTop: ["24px", "24px", "48px", "48px", "48px"],
        paddingBottom: ["24px", "24px", "48px", "48px", "48px"],
        paddingLeft: ["24px", "24px", "48px", "48px", "354px", "666px"],
        paddingRight: ["24px", "24px", "48px", "48px", "354px", "666px"],
    })}
    background-color: #fff;
    width: 100%;
`;

const BankOffer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
`;

const Products = styled.div`
    display: flex;
    ${mq({
        flexDirection: ["column", "column", "row", "row"],
        gap: ["2rem", "2rem", "3rem", "3rem"],
    })}
`;

const ProductColumn = styled.div`
    flex-direction: column;
    display: flex;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const BankProductActions = styled.div`
    list-style-type: none;
    align-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mq({
        gap: ["1rem", "1rem", "2rem", "2rem"],
        marginTop: ["0.5rem", "0.5rem", "1rem", "1rem"],
    })}
`;

const ActionLink = styled.a`
    ${mq({
        fontSize: ["0.75rem", "0.9rem", "1.1rem", "1.25rem"],
    })};
    text-align: center;
    font-family: "Source Sans Pro", sans-serif;
    padding: 10px;
    color: #000;
`;

const Title = styled.h1`
    ${mq({
        marginTop: ["18px", "18px", "36px", "36px"],
        paddingBottom: ["48px", "48px", "96px", "96px"],
    })};
    text-align: center;
`;

const ProductBox = styled.div`
    ${mq({
        width: ["100%", "100%", "80%", "80%"],
        marginBottom: ["20px", "20px", "50px", "20px"],
        marginLeft: ["15px", "15px", "20px", "20px"],
        height: ["30px", "30px", "60px", "60px"],
        padding: ["12px", "12px", "0px", "0px"],
        border: [
            `3px solid ${colors.MAIN_YELLOW}`,
            `3px solid ${colors.MAIN_YELLOW}`,
            `5px solid ${colors.MAIN_YELLOW}`,
            `5px solid ${colors.MAIN_YELLOW}`,
        ],
        boxShadow: [
            `-10px 10px ${colors.MAIN_YELLOW}`,
            `-10px 10px ${colors.MAIN_YELLOW}`,
            `-20px 20px ${colors.MAIN_YELLOW}`,
            `-20px 20px ${colors.MAIN_YELLOW}`,
        ],
    })};
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: #fff;
    border-radius: ${sizes.BORDER_RADIUS};
`;

const ProductName = styled.h3`
    ${mq({
        fontSize: ["0.75rem", "0.75rem", "1.25rem", "1.25rem"],
    })};
    text-align: center;
    color: #000;
`;

const Button = styled.button`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${colors.MAIN_YELLOW};
    color: white;
    border: 3px solid ${colors.MAIN_YELLOW};
    border-radius: 15px;
    outline: none;
    &:hover {
        cursor: pointer;
    }
    &:active {
        color: black;
        background-color: white;
    }
    ${mq({
        padding: ["5px 10px", "5px 10px", "10px 20px", "10px 20px"],
        fontSize: ["0.75rem", "0.75rem", "1.25rem", "1.25rem"],
    })}
`;
