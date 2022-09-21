/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from "next";
import * as Icon from "../components/Icons";
import * as Styles from "../styles/HomeStyles";
import { ButtonLink } from "../components/Button";
import { DownloadSimple } from "phosphor-react";
import Head from "next/head";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { MainContainer } from "../styles/Containers";
import { PageInfo } from "../@types/sanity";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const Home = ({ pageInfo }: Props) => {
  const github = pageInfo.socials.find((item) => item.title == "Github");
  const linkedin = pageInfo.socials.find((item) => item.title == "Linkedin");

  return (
    <MainContainer>
      <Head>
        <title>Tarcisio | Porfólio</title>
      </Head>
      <Styles.HeaderFlex>
        <Styles.Avatar>
          <Image
            src={urlFor(pageInfo.avatarImage).url()}
            alt={pageInfo.name}
            layout="fill"
          />
        </Styles.Avatar>
        <div>
          <Styles.Name>{pageInfo.name}</Styles.Name>
          <Styles.SubTitle>{pageInfo.role}</Styles.SubTitle>
          <Styles.SocialIcons>
            <a href={github?.link as string} target="_blank" rel="noreferrer">
              <Icon.GithubIcon />
            </a>
            <a href={linkedin?.link as string} target="_blank" rel="noreferrer">
              <Icon.LinkedinIcon />
            </a>
          </Styles.SocialIcons>
        </div>
      </Styles.HeaderFlex>
      <Styles.Intro>{pageInfo.intro}</Styles.Intro>
      <ButtonLink href="" target="_blank">
        Download CV{" "}
        <DownloadSimple size={16} color="currentColor" weight="bold" />
      </ButtonLink>

      <Styles.TitleTec>Tecnologias e Conhecimentos</Styles.TitleTec>

      <Styles.ContainerTecs>
        {pageInfo.skills.map(({ image, slug, title, _id }) => (
          <Tippy content={slug} placement="bottom" theme="dark" arrow key={_id}>
            <div style={{ width: "fit-content" }}>
              <img src={urlFor(image).url()} alt={title} />
            </div>
          </Tippy>
        ))}
      </Styles.ContainerTecs>
    </MainContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
    },
    revalidate: 10,
  };
};
