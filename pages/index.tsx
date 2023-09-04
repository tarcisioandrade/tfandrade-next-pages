import Head from "next/head";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import * as Icon from "../components/Icons";
import * as Styles from "../styles/HomeStyles";
import type { GetStaticProps } from "next";
import { ButtonLink } from "../components/Button";
import { DownloadSimple, EnvelopeSimple } from "phosphor-react";
import { MainContainer } from "../styles/Containers";
import { PageInfo } from "../interfaces/sanity";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { urlFor } from "../sanity";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const Home = ({ pageInfo }: Props) => {
  const github = pageInfo.socials.find((item) => item.title == "Github");
  const linkedin = pageInfo.socials.find((item) => item.title == "Linkedin");
  const email = pageInfo.socials.find((item) => item.title == "Email");
  const cvFileURL = pageInfo.curriculum;

  const { t } = useTranslation("common");

  const title = `Tarcisio | ${t("homeTitle")}`;

  return (
    <MainContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <Styles.HeaderFlex>
        <Styles.Avatar>
          <Image
            src={urlFor(pageInfo.avatarImage).format("webp").url()}
            alt={pageInfo.name}
            width={150}
            height={150}
            priority
          />
        </Styles.Avatar>
        <div>
          <Styles.Name>{pageInfo.name}</Styles.Name>
          <Styles.SubTitle>{pageInfo.role}</Styles.SubTitle>
          <Styles.SocialIcons>
            <a
              href={github?.link}
              target="_blank"
              rel="noreferrer"
              aria-label={github?.title}
            >
              <Icon.GithubIcon />
            </a>
            <a
              href={linkedin?.link}
              target="_blank"
              rel="noreferrer"
              aria-label={linkedin?.title}
            >
              <Icon.LinkedinIcon />
            </a>

            <a
              href={`mailto:${email?.link}`}
              target="_blank"
              rel="noreferrer"
              aria-label={email?.title}
            >
              <EnvelopeSimple size={32} weight="fill" color="#FBFCFF" />
            </a>
          </Styles.SocialIcons>
        </div>
      </Styles.HeaderFlex>
      <Styles.Intro>{pageInfo.intro}</Styles.Intro>
      <ButtonLink href={`${cvFileURL}?dl=`} target="_blank">
        {t("buttonCV")}
        <DownloadSimple size={24} color="currentColor" weight="bold" />
      </ButtonLink>

      <Styles.TitleSec>{t("skillsTitle")}</Styles.TitleSec>

      <Styles.ContainerTecs>
        {pageInfo.skills.map(({ image, slug, title, _id }) => (
          <Tippy content={slug} placement="bottom" theme="dark" arrow key={_id}>
            <Styles.Tec>
              <Image
                src={urlFor(image).url()}
                alt={title}
                width={80}
                height={80}
              />
            </Styles.Tec>
          </Tippy>
        ))}
      </Styles.ContainerTecs>
    </MainContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const pageInfo = await fetchPageInfo(locale);

  return {
    props: {
      pageInfo,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
