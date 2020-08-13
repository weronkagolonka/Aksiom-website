import { createGlobalStyle } from 'styled-components';
import '../fonts/Nunito-Bold.ttf';
import '../fonts/SourceSansPro-Regular.ttf';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Nunito';
        src: local('Nunito'), format('truetype');
    }

    @font-face {
        font-family: 'Source Sans Pro';
        src: local('SourceSansPro'), format('truetype');
    }

    *,
    *::after,
    *::before {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
    }

    html {
        height: 100%;
    }

    body {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        height: 100%;
    }

    h1 {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.25rem;
        font-weight: normal;
    }

    button {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
    }

`;

export default GlobalStyles;