import * as Styles from "./styles";
import type { Project } from "../../interfaces/sanity";
import { urlFor } from "../../sanity";
import { LinkOut } from "../Icons";
import Link from "next/link";
import Image from "next/image";

type Props = {
  project: Project;
};

const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
    >
      <path
        fill="#fff"
        d="M16.24 22a1 1 0 01-1-1v-2.6a2.15 2.15 0 00-.54-1.66 1 1 0 01.61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 00-.67-2.22 2.75 2.75 0 01-.41-2.06 3.71 3.71 0 000-1.41 7.65 7.65 0 00-2.09 1.09 1 1 0 01-.84.15 10.15 10.15 0 00-5.52 0 1 1 0 01-.84-.15 7.4 7.4 0 00-2.11-1.09 3.52 3.52 0 000 1.41 2.84 2.84 0 01-.43 2.08 4.07 4.07 0 00-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 01.82.66 1 1 0 01-.21 1 2.06 2.06 0 00-.55 1.56V21a1 1 0 01-2 0v-.57a6 6 0 01-5.27-2.09 3.9 3.9 0 00-1.16-.88 1 1 0 11.5-1.94 4.93 4.93 0 012 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 01.23-1.58c-2.06-.52-5-2-5-7a6 6 0 011-3.33.85.85 0 00.13-.62 5.69 5.69 0 01.33-3.21 1 1 0 01.63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 015.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 01.63.57 5.71 5.71 0 01.33 3.22.75.75 0 00.11.57 6 6 0 011 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 01.22 1.67V21a1 1 0 01-.94 1z"
      ></path>
    </svg>
  );
};

const ProjectItem = ({ project }: Props) => {
  const urlOptimized =
    "https://8bymgq7k.cdn.imgeng.in/" +
    urlFor(project.projectImage).url().split("https://cdn.sanity.io/")[1];

  return (
    <Styles.Project className="project-item">
      <Styles.Image>
        {/* <img src={urlOptimized} alt={project.projectTitle} /> */}
        <Image
          src={urlOptimized}
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
              <GithubIcon />
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
