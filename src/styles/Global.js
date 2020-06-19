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
        font-size: 70%
    }

    body {
        box-sizing: border-box;
        font-family: 'Nunito';
    }

    p {
        box-sizing: border-box;
        font-family: 'Source Sans Pro';
    }

`;

export default GlobalStyles;