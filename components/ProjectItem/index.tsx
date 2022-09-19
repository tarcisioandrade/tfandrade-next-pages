import Image from "next/image";
import Link from "next/link";
import { LinkOut } from "../Icons";
import * as Styles from "./styles";

const ProjectItem = () => {
  return (
    <Link href="/project-link" target="_blank">
      <a>
        <Styles.Project>
          <Styles.Image>
            <Image
              src="/assets/project.png"
              width={400}
              height={270}
              alt="Project Name"
              objectFit="cover"
            />
          </Styles.Image>
          <Styles.Content className="content">
            <Styles.Wrapper>
              <Styles.Icon>
                <LinkOut />
              </Styles.Icon>
              <Styles.Name>Event Plataform</Styles.Name>
              <Styles.Tags>
                <Styles.Tag>React</Styles.Tag>
                <Styles.Tag>Typescript</Styles.Tag>
                <Styles.Tag>Graphql</Styles.Tag>
                <Styles.Tag>GraphCMS</Styles.Tag>
                <Styles.Tag>Apollo Client</Styles.Tag>
                <Styles.Tag>Tailwind CSS</Styles.Tag>
              </Styles.Tags>
            </Styles.Wrapper>
          </Styles.Content>
        </Styles.Project>
      </a>
    </Link>
  );
};

export default ProjectItem;
