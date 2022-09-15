import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/Theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import MenuSide from "../components/MenuSide";
import { useState } from "react";
import { Container, BlurContainer, MainContainer } from "../styles/Containers";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color="#43C59E"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <GlobalStyles />
      <BlurContainer isActive={isMenuOpen}>
        <Container>
          <MenuSide />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </Container>
      </BlurContainer>
    </ThemeProvider>
  );
}

export default MyApp;
