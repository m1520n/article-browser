import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
  font-family: 'ArialMT';
  src: url('/fonts/ArialMT/ArialMT.woff2') format('woff2'),
      url('/fonts/ArialMT/ArialMT.woff') format('woff'),
      url('/fonts/ArialMT/ArialMT.ttf') format('ttf'),
      url('/fonts/ArialMT/ArialMT.svg#ArialMT') format('svg');
  font-weight: normal;
  font-style: normal;
  }

  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
