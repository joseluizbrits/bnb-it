import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --primary-light: #B7FBFF;
    --primary-light-10: rgba(183, 251, 255, 0.1);
    --primary-light-50: rgba(183, 251, 255, 0.5);
    --primary-gradient: linear-gradient(40deg, #3DF4FF, #B7FBFF);
    --primary-dark: #064F53;
    --primary-dark-50: rgba(6, 79, 63, 0.5);
    --primaryGradient: linear-gradient(to right, #692FA4, #764BA2, #8659B4);
    --secondary-light: #2381EF;
    --secondary-dark: #18295D;
    --gray-light: #CDD2DF;
    --gray-mid: #9097AE;
    --gray-dark: #071B34;
    --gray-dark-10: rgba(7, 27, 52, 0.1);
    --black-10: rgba(0, 0, 0, 0.1);
    --background: #06182F;
    --border: rgba(44, 74, 113, 0.2);
    --warning: #F62C2C;
    --small: clamp(1rem, 1.125vw, 1.125rem);
    --medium: clamp(1.125rem, 1.5vw, 1.5rem);
    --large: clamp(1.75rem, 2.5vw, 2.5rem);
    --x-large: clamp(1.875rem, 3vw, 3rem);
    --xx-large: clamp(2rem, 3.5vw, 3.5rem);
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--background);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  input, textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }

  .padding-space {
    padding: 0 120px;
  }

  .margin-space {
    margin: 0 120px;
  }

  /* ---------- SCROLLBAR ---------- */

  *::-webkit-scrollbar,
  body::-webkit-scrollbar,
  html::-webkit-scrollbar {
    background: var(--background);
    width: 12px;
    height: 12px;
  }

  *::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  html::-webkit-scrollbar-thumb {
    background: var(--background);
    border-radius: 5px;
    border: 1px solid var(--primary-dark);
  }

  *::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  html::-webkit-scrollbar-thumb:hover {
    background: var(--primary-light);
  }

  @media screen and (max-width: 1440px) {
    .padding-space {
      padding: 0 80px;
    }

    .margin-space {
      margin: 0 80px;
    }
  }

  @media screen and (max-width: 1024px) {
    .padding-space {
      padding: 0 40px;
    }

    .margin-space {
      margin: 0 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .padding-space {
      padding: 0 20px;
    }

    .margin-space {
      margin: 0 20px;
    }
  }

  @media screen and (max-width: 480px) {
    .padding-space {
      padding: 0 20px;
    }

    .margin-space {
      margin: 0 20px;
    }
  }
`;

export default GlobalStyles;
