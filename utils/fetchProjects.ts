import { Project } from "../@types/sanity";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "projects"] {
    ...,
    tags[] ->
  }
`;

export const fetchProjects = async () => {
  const data = await sanityClient.fetch(query);
  const projects: Project[] = data;

  return projects;
};
