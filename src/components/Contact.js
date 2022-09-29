import React from 'react';
import styled from 'styled-components';
import { mq } from '../breakpoints';
import { config } from '../config';

const Contact = React.forwardRef((props, ref) => {

    const { submit, setName, setEmail, setMessage, state } = props
    return (
        <MainBox>
            <Title ref={ref}>Skontaktuj się z nami!</Title>
            <Row>
                <AddresBox>
                    <div>
                        <p style={{ 'fontWeight': 'bold', }}>Biuro Rachunkowe AKSIOM</p>
                        <p>ul. Owsiana 62</p>
                        <p>40-780 Katowice</p>
                        <p><br />biuro@aksiom.pl</p>
                        <p>+48 514 088 487</p>
                    </div>
                    <Map src={config.mapsURL}
                        title={'map'} frameBorder={"0"} allowFullScreen={""} aria-hidden={"false"} tabIndex={"0"}></Map>
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
    ${mq({
    paddingTop: ['24px', '24px', '48px', '48px', '48px'],
    paddingBottom: ['24px', '24px', '48px', '48px', '48px'],
    paddingLeft: ['24px', '24px', '48px', '48px', '354px', '666px'],
    paddingRight: ['24px', '24px', '48px', '48px', '354px', '666px'],
})}
    background-color: #fff;
    width: 100%;
`;

const Row = styled.div`
    ${mq({
    flexDirection: ['column', 'column', 'row', 'row'],
    justifyContent: ['center', 'center', 'space-between', 'space-between'],
})};
    display: flex;
`;

const AddresBox = styled.div`
    display: flex;
    flex-direction: column;
    ${mq({
    paddingBottom: ['0px', '0px', '24px', '24px'],
    paddingRight: ['0px', '0px', '72px', '72px'],
    justifyContent: ['center', 'center', 'flex-start', 'flex-start'],
    alignItems: ['center', 'center', 'flex-start', 'flex-start'],
    textAlign: ['center', 'center', 'left', 'left'],
    flex: ['100%', '100%', '50%', '50%'],
})};
`;

const Map = styled.iframe`
    ${mq({
    width: '100%',
    height: ['180px', '180px', '390px', '390px'],
    marginTop: ['24px', '24px', '56px', '48px']
})};
`;

const FormBox = styled.div`
    ${mq({
    marginTop: ['36px', '36px', '0px', '0px'],
    paddingBottom: ['12px', '12px', '24px', '24px'],
    flex: ['100%', '100%', '50%', '50%'],
})};
`;

const Title = styled.h1`
    ${mq({
    marginTop: ['18px', '18px', '36px', '36px'],
    paddingBottom: ['48px', '48px', '96px', '96px']
})};
    text-align: center;
`;

const FormLabel = styled.p`
    ${mq({
    paddingBottom: ['9px', '9px', '18px', '18px']
})};
`;

const InformationField = styled.input`
    ${mq({
    marginBottom: ['16px', '16px', '36px', '36px'],
    width: ['100%', '100%', '80%', '80%'],
    height: ['40px', '40px', '48px', '58px'],
    fontSize: ['0.75rem', '0.75rem', '1.25rem', '1.25rem']
})};
    border-radius: 15px;
    border: 3px solid #D5992E;
    box-shadow: -10px 10px #D5992E;
    padding-left: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    transition: 0.5s;
    outline: none;
`;

const QuestionField = styled.textarea`
    ${mq({
    width: ['100%', '100%', '100%', '100%'],
    fontSize: ['0.75rem', '0.75rem', '1.25rem', '1.25rem']
})};
    height: 200px;
    border-radius: 15px;
    border: 3px solid #D5992E;
    box-shadow: -10px 10px #D5992E;
    padding-left: 10px;
    padding-top: 10px;
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


