import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.whitePrimary} ;
    background: ${({ theme }) => theme.blackBlue} ;
    font-family: 'Inter', sans-serif;
    background-image: url("/assets/bg-image.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`;
