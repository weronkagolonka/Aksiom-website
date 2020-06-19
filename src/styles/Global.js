import { createGlobalStyle } from 'styled-components';
import '../fonts/Nunito-Regular.ttf'

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Nunito';
        src: local('Nunito'), ur;(./fonts/Nunito-Regular.ttf) format('truetype');
    }

    *,
    *::after,
    *::before {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%
    }

    body {
        box-sizing: border-box;
        font-family: 'Nunito';
    }
`;

export default GlobalStyles;