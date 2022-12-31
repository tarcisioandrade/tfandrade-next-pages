import Image from "next/image";
import * as Styles from "./styles";
import type { Project } from "../../interfaces/sanity";
import { urlFor } from "../../sanity";
import { LinkOut } from "../Icons";

type Props = {
  project: Project;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <a href={project.projectLink} target="_blank" rel="noreferrer">
      <Styles.Project>
        <Styles.Image>
          <Image
            src={urlFor(project.projectImage).url()}
            width={400}
            height={270}
            alt={project.projectTitle}
            objectFit="fill"
            priority
          />
        </Styles.Image>
        <Styles.Content className="content">
          <Styles.Wrapper>
            <Styles.Icon>
              <LinkOut />
            </Styles.Icon>
            <Styles.Name>{project.projectTitle}</Styles.Name>
            <Styles.Tags>
              {project.tags.map((tag) => (
                <Styles.Tag key={tag._id}>{tag.title}</Styles.Tag>
              ))}
            </Styles.Tags>
          </Styles.Wrapper>
        </Styles.Content>
      </Styles.Project>
    </a>
  );
};

export default ProjectItem;
