import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.whitePrimary} ;
    background-image: linear-gradient(180deg,#292d4a 3%,#101230 83%);
    font-family: 'Inter', sans-serif;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
    
    @media screen and (max-width: 768px) {
      background-attachment: scroll;
  }
  }
`;
