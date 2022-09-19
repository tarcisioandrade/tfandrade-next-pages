import Head from "next/head";
import ProjectItem from "../components/ProjectItem";
import { MainContainer } from "../styles/Containers";
import * as Styles from "../styles/ProjectStyles";

const Projects = () => {
  return (
    <MainContainer>
      <Head>
        <title>Tarcisio | Projetos</title>
      </Head>
      <Styles.TitleProject>Projetos</Styles.TitleProject>
      <Styles.ContainerProjects>
        {["1", "2", "3"].map((item, i) => (
          <ProjectItem key={i} />
        ))}
      </Styles.ContainerProjects>
    </MainContainer>
  );
};

export default Projects;
