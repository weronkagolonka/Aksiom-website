import React from 'react';
import styled from 'styled-components';

const Links = React.forwardRef((props, ref) => {
    return (
        <MainBox>
            <Title ref={ref}>Pobierz wzory niezbędnych dokumentów</Title>
            <Row>
                <SectionColumn>
                    <TitleBox>
                        <h2>Umowy w działalności gospodarczej</h2>
                    </TitleBox>
                    <Document>Umowa kupna-sprzedaży</Document>
                    <Document>Umowa o pracę nakładczą</Document>
                    <Document>Umowa pożyczki</Document>
                    <Document>Umowa użytkowania</Document>
                    <Document>Umowa kupna-sprzedaży Pojazdu</Document>
                    <Document>Umowa o dzieło</Document>
                    <Document>Umowa o wspólnej odpowiedzialności materialnej za powierzone mienie</Document>
                    <Document>Umowa przedwstępna sprzedaży</Document>
                    <Document>Umowa zlecenia</Document>
                    <Document >Świadectwo pracy</Document>
                    <Document >Umowa komisu</Document>
                    <Document >Umowa najmu lokalu mieszkalnego</Document>
                    <Document >Umowa o pracę</Document>
                </SectionColumn>
                <SectionColumn>
                    <TitleBox>
                        <h2>Formularze</h2>
                    </TitleBox>
                    <Document>Karta informacyjna klienta (GIIF)</Document>
                    <Document>Protokół zaliczenia należności nieściągalnych o niskiej wartości w koszty uzyskania dochodu</Document>
                    <Document>Zapytanie o opinię podatków</Document>
                    <Document>Wykaz przekazanych informacji rocznych pracowników o dochodach (PIT-11)</Document>
                    <Document>Ankieta – ocena pracy kancelarii doradztwa podatkowego przez odchodzącego klienta</Document>
                    <Document>Protokół wydania dokumentów księgowych po rozwiązaniu umowy</Document>
                    <Document>Regulamin świadczenie usług doradztwa podatkowego</Document>
                    <Document>Regulamin korzystania z Infolinii podatkowej</Document>
                    <Document>Wykaz składników majątkowych na dzień likwidacji działalności gospodarczej</Document>
                    <Document>Protokół przyjęcia akt osobowych</Document>
                    <Document>Protokół przyjęcia dokumentów i informacji (usługa kadrowa)</Document>
                    <Document>Protokół przyjęcia dokumentów i informacji (usługa płacowa i ZUS)</Document>
                    <Document>Protokół wydania dokumentów ZUS</Document>
                    <Document>Informacja dla klienta o wysokości składek ZUS</Document>
                    <Document>Wykaz dokumentów i informacji przyjętych do umowy o sporządzenie wniosku o zwrot VAT z tytułu wydatków mieszkaniowych (VZM-1)</Document>
                </SectionColumn>
            </Row>
            <Row>
                <SectionColumn>
                    <TitleBox>
                        <h2>Umowy</h2>
                    </TitleBox>
                    <Document>Umowa o reprezentację przy zwrocie VAT</Document>
                    <Document>Umowa o prowadzenie rozliczeń przychodów z nieruchomości</Document>
                    <Document>Umowa o kontrolę zapisów oraz sporządzenie korekt deklaracji podatkowych</Document>
                    <Document>Umowa o świadczenie stałych konsultacji prawno podatkowych</Document>
                    <Document>Umowa współpracy w zakresie rozliczania projektu</Document>
                    <Document>Umowa o prowadzenie obsługi kadrowej</Document>
                    <Document>Umowa o przygotowanie wniosku o dofinansowanie</Document>
                    <Document>Umowa o prowadzenie obsługi płacowej i rozliczeń ZUS</Document>
                    <Document>Umowa o sporządzenie wniosku o zwrot podatku od wartości dodanej naliczonego w innym kraju UE</Document>
                    <Document>Umowa o sporządzenie wniosku o zwrot VAT z tytułu wydatków mieszkaniowych oraz reprezentację w postępowaniu podatkowym</Document>
                </SectionColumn>
                <SectionColumn>
                    <TitleBox>
                        <h2>Pisma</h2>
                    </TitleBox>
                    <Document>Odwołanie pełnomocnictwa przez podatnika</Document>
                    <Document>Wypowiedzenie pełnomocnictwa przez doradcę podatkowego</Document>
                    <Document>Zawiadomienie US o rozwiązaniu umowy przez kancelarię</Document>
                    <Document>Oświadczenie pracownika o odbyciu szkolenia w zakresie realizacji obowiązków wynikających z ustawy o przeciwdziałaniu praniu pieniędzy i finansowaniu terroryzmu</Document>
                    <Document>Wniosek o potwierdzenie rejestracji do VAT dłużnika (ulga na złe długi)</Document>
                    <Document>Zawiadomienie dłużnika o zamiarze skorygowania podatku należnego (ulga na złe długi)</Document>
                    <Document>Zawiadomienie dłużnika o dokonaniu korekty podatku należnego (ulga na złe długi)</Document>
                    <Document>Zawiadomienie US o dokonaniu korekty podatku należnego (ulga na złe długi)</Document>
                    <Document>Zawiadomienie o popełnieniu czynu zabronionego (czynny żal) - niezapłacenie podatku</Document>
                    <Document>Zawiadomienie o popełnieniu czynu zabronionego (czynny żal) - niezłożenie deklaracji/zeznania</Document>
                    <Document>Oświadczenie wspólnika spółki osobowej o zapłacie podatku z rachunku bankowego spółki</Document>
                    <Document>Upoważnienie do przetwarzania danych osobowych</Document>
                    <Document>Pełnomocnictwo do reprezentowania w sprawie złożonego wniosku VZM-1 o zwrot niektórych wydatków związanych z budownictwem mieszkaniowym</Document>
                </SectionColumn>
            </Row>
        </MainBox>
    );
});

export default Links

const MainBox = styled.div`
    padding: 48px;
    background-color: #f8f8f8;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 48px;
`;

const SectionColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
`;

const TitleBox = styled.div`
    height: 100px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 5px solid #D5992E;
    border-radius: 25px;
    box-shadow: -20px 20px #D5992E;
    margin-bottom: 60px;
    margin-left: 20px;
    padding: 24px;
`;

const Title = styled.h1`
    margin-top: 36px;
    text-align: center;
    padding-bottom: 96px;
`;

const Document = styled.a`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.25rem;
    padding: 15px;
    text-align: center;
    color: #000;
    text-decoration: none;
    &:hover {
                    text - decoration: underline;
    }
`;