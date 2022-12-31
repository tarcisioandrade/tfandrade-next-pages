import Head from "next/head";
import ProjectItem from "../components/ProjectItem";
import * as Styles from "../styles/ProjectStyles";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Project } from "../interfaces/sanity";
import { MainContainer } from "../styles/Containers";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const { t } = useTranslation("common");

  const title = `Tarcisio | ${t("projectsTitle")}`;

  return (
    <MainContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <Styles.TitleProject>{t("projectsTitle")}</Styles.TitleProject>
      <Styles.ContainerProjects>
        {projects?.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </Styles.ContainerProjects>
    </MainContainer>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
    revalidate: 10,
  };
};
