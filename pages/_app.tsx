import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/Theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import MenuSide from "../components/MenuSide";
import React, { useCallback, useEffect, useState } from "react";
import { Container, BlurContainer } from "../styles/Containers";
import NextNProgress from "nextjs-progressbar";
import MenuMobile from "../components/MenuMobile";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen),[isMenuOpen]);

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (e.target.closest(".blur") && !e.target.closest(".menuMobile") && isMenuOpen) {
        handleMenu();
      }
    };
    document.addEventListener("click", outSideClick);
    return () => document.removeEventListener("click", outSideClick);
  }, [handleMenu, isMenuOpen]);

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
      <MenuMobile isOpen={isMenuOpen} toggle={handleMenu} />
      <BlurContainer isActive={isMenuOpen} className="blur">
        <Container>
          <MenuSide />
            <Component {...pageProps} />
        </Container>
      </BlurContainer>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp) ;
