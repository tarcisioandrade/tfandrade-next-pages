import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.whitePrimary} ;
    background: ${({ theme }) =>
      theme.blackBlue} url("assets/bg-image.png") bottom center no-repeat ;
      background-size: cover;
    font-family: 'Inter', sans-serif;
  }

`;
