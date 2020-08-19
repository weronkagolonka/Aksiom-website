import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const Footer = (props) => {
    return (
        <FooterBox>
            <CompanyName>Biuro Rachunkowe AKSIOM</CompanyName>
            <FooterContent>NIP: 6442324607</FooterContent>
            <FooterContent>Regon: 243418808</FooterContent>
            <div style={{ 'display': 'flex', 'justifyContent': 'center', 'padding': '24px' }}>
                <a href={"https://www.linkedin.com/in/biuro-rachunkowe-aksiom-b203171b2/"} target={"blank"}>
                    <FaLinkedin size={36} color={"#000"} />
                </a>
            </div>
            <FooterContent>© AKSIOM 2020. Wszelkie prawa zastrzeżone.</FooterContent>
        </FooterBox >
    )
}

export default Footer

const FooterBox = styled.div`
    padding: 48px;
    background-color: #D5992E
`;

const CompanyName = styled.div`
    font-size: 1.25rem;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    padding-bottom: 20px;
    text-align: center;
`;

const FooterContent = styled.div`
    font-size: 1rem;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
`;
