import { GetStaticProps } from "next";
import Head from "next/head";
import { Project } from "../@types/sanity";
import ProjectItem from "../components/ProjectItem";
import { MainContainer } from "../styles/Containers";
import * as Styles from "../styles/ProjectStyles";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <MainContainer>
      <Head>
        <title>Tarcisio | Projetos</title>
      </Head>
      <Styles.TitleProject>Projetos</Styles.TitleProject>
      <Styles.ContainerProjects>
        {projects?.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </Styles.ContainerProjects>
    </MainContainer>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};
