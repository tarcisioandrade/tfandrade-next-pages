import type { NextPage } from "next";
import * as Icon from "../components/Icons";
import * as Styles from "../styles/HomeStyles";
import { ButtonLink } from "../components/Button";
import { DownloadSimple } from "phosphor-react";
import Head from "next/head";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Link from "next/link";
import { MainContainer } from "../styles/Containers";

const icons = [
  { icon: <Icon.ReactIcon />, slug: "React" },
  { icon: <Icon.JavascriptIcon />, slug: "Javascript" },
  { icon: <Icon.GitIcon />, slug: "Git" },
  { icon: <Icon.NextIcon />, slug: "Next" },
  { icon: <Icon.SassIcon />, slug: "Sass" },
  { icon: <Icon.TypescriptIcon />, slug: "Typescript" },
];

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Tarcisio | Porfólio</title>
      </Head>
      <Styles.HeaderFlex>
        <Styles.Avatar />
        <div>
          <Styles.Name>Tarcisio Fraga de Andrade</Styles.Name>
          <Styles.SubTitle>Front-end Developer</Styles.SubTitle>
          <Styles.SocialIcons>
            <Link href="https://github.com/tarcisioandrade" target="_blank">
              <a>
                <Icon.GithubIcon />
              </a>
            </Link>
            <Link href="" target="_blank">
              <a>
                <Icon.LinkedinIcon />
              </a>
            </Link>
          </Styles.SocialIcons>
        </div>
      </Styles.HeaderFlex>
      <Styles.Intro>
        Eu sou um estudante de Desenvolvimento Web, ávido a um dia me tornar
        Fullstack. Ademais, busco aprimorar meus conhecimentos através de novos
        desafios, desejando uma oportunidade de colocar em prática o que estou
        estudando em um ambiente profissional.
      </Styles.Intro>
      <ButtonLink href="" target="_blank">
        Download CV <DownloadSimple size={17} color="#FBFCFF" weight="bold" />
      </ButtonLink>

      <Styles.TitleTec>Tecnologias e Conhecimentos</Styles.TitleTec>

      <Styles.ContainerTecs>
        {icons.map(({ icon, slug }, index) => (
          <Tippy
            content={slug}
            placement="bottom"
            theme="dark"
            arrow
            key={index}
          >
            <div style={{ width: "fit-content" }}>{icon}</div>
          </Tippy>
        ))}
      </Styles.ContainerTecs>
    </MainContainer>
  );
};

export default Home;
