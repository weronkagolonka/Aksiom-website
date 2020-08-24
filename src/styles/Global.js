import { createGlobalStyle } from 'styled-components';
import '../fonts/Nunito-Bold.ttf';
import '../fonts/SourceSansPro-Regular.ttf';
import { mq } from '../breakpoints';

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
        width: 100%;
    }

    h1 {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        ${mq({
    fontSize: ['1.5rem', '1.5rem', '2.5rem', '2.5rem',]
})};
    }

    h2 {
        ${mq({
    fontSize: ['1rem', '1rem', '2rem', '2rem']
})};
    }

    p {
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: normal;
        ${mq({
    fontSize: ['0.75rem', '0.75rem', '1.25rem', '1.25rem']
})};
    }

    button {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
    }

`;

export default GlobalStyles;