import React from 'react';
import styled from 'styled-components';

const Contact = React.forwardRef((props, ref) => {

    const { submit, setName, setEmail, setMessage, state } = props

    return (
        <MainBox>
            <Title ref={ref}>Skontaktuj się z nami!</Title>
            <Row>
                <AddresBox>
                    <div>
                        <p style={{ 'fontWeight': 'bold', }}>Biuro Rachunkowe AKSIOM</p>
                        <p>ul. Koszykowa 21a/1</p>
                        <p>40-780 Katowice</p>
                        <p><br />biuro@aksiom.pl</p>
                        <p>+48 781 431 618</p>
                    </div>
                    <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.6184033408763!2d18.918137415718498!3d50.22435097944496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cd11b0ca0383%3A0xf8662d5402275625!2sBiuro%20Rachunkowe%20AKSIOM!5e0!3m2!1spl!2spl!4v1597776760093!5m2!1spl!2spl"}
                        title={'map'} frameBorder={"0"} allowFullScreen={""} aria-hidden={"false"} tabIndex={"0"} width={600} height={350} style={{ 'marginTop': '48px' }}></iframe>
                </AddresBox>
                <FormBox>
                    <form>
                        <FormLabel>Imię i nazwisko</FormLabel>
                        <InformationField type={'text'} onChange={setName} value={state.name}></InformationField>
                        <FormLabel>Adres email</FormLabel>
                        <InformationField type={'email'} onChange={setEmail} value={state.email}></InformationField>
                        <FormLabel>Zapytanie</FormLabel>
                        <QuestionField onChange={setMessage} value={state.message}></QuestionField>
                    </form>
                    <div style={{ 'display': 'flex', 'justifyContent': 'flex-end' }}>
                        <Button onClick={submit}><h2>Wyślij</h2></Button>
                    </div>
                </FormBox>
            </Row>
        </MainBox >
    );
});

export default Contact

const MainBox = styled.div`
    background-color: #f8f8f8;
    padding: 48px;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const AddresBox = styled.div`
    padding-bottom: 24px;
    padding-right: 24px;
`;

const FormBox = styled.div`
    padding-bottom: 24px;
`;

const Title = styled.h1`
    text-align: center;
    margin-top: 36px;
    padding-bottom: 48px;
`;

const FormLabel = styled.p`
    padding-bottom: 18px;
`;

const InformationField = styled.input`
    margin-bottom: 36px;
    width: 500px;
    height: 48px;
    border-radius: 15px;
    border: 3px solid #D5992E;
    box-shadow: -10px 10px #D5992E;
    padding-left: 10px;
    font-size: 1.25rem;
    font-family: 'Source Sans Pro', sans-serif;
    transition: 0.5s;
    outline: none;
`;

const QuestionField = styled.textarea`
    width: 600px;
    height: 200px;
    border-radius: 15px;
    border: 3px solid #D5992E;
    box-shadow: -10px 10px #D5992E;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 1.25rem;
    font-family: 'Source Sans Pro', sans-serif;
    outline: none;
`;

const Button = styled.button`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 24px;
    background-color: #fff;
    color: #000;
    border: 3px solid #D5992E;
    border-radius: 15px;
    outline: none;
    &:active {
        color: #fff;
        background-color: #D5992E;
    }
`;


