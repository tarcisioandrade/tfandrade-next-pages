import * as Styles from "./styles";
import type { Project } from "../../interfaces/sanity";
import { urlFor } from "../../sanity";
import { GithubProjectIcon, LinkOut } from "../Icons";
import Link from "next/link";
import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.Project className="project-item">
      <Styles.Image>
        <Image
          src={urlFor(project.projectImage).format("webp").url()}
          alt={project.projectTitle}
          width={400}
          height={250}
        />
      </Styles.Image>
      <Styles.Content className="content">
        <Styles.Wrapper>
          <Styles.Icon>
            <Link
              href={project.projectGithubLink}
              target="_blank"
              title="Github Link"
            >
              <GithubProjectIcon />
            </Link>
            <Link
              href={project.projectLink}
              target="_blank"
              title="Website Link"
            >
              <LinkOut />
            </Link>
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
  );
};

export default ProjectItem;
