import theme from "../styles/theme/Theme";
import MenuSide from "../components/MenuSide";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Container, BlurContainer } from "../styles/Containers";
import { useCallback, useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";
import AlterLanguange from "../components/AlterLanguage";

const DynamicMenuMobile = dynamic(() => import("../components/MenuMobile"));

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = useCallback(
    () => setIsMenuOpen(!isMenuOpen),
    [isMenuOpen]
  );

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (
        e.target.closest(".blur") &&
        !e.target.closest(".menuMobile") &&
        isMenuOpen
      ) {
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
      <DynamicMenuMobile isOpen={isMenuOpen} toggle={handleMenu} />
      <BlurContainer isActive={isMenuOpen} className="blur">
        <Container>
          <MenuSide />
          <Component {...pageProps} />
          <AlterLanguange />
        </Container>
      </BlurContainer>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
