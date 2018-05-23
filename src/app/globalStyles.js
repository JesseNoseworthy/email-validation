import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 13px;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }

  body {
    background: rgb(250, 250, 250);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: 'Helvetica', sans-serif;
  }

  figure {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }
  
  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  h4 {
    font-size: 20px;
    font-weight: 300;
  }

  label {
    display: block;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: initial;
  }

  button,
  input {
    font-size: 16px;
  }
`;