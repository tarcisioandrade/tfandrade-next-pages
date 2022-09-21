import { Project } from "../@types/sanity";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "projects"] {
    ...,
    tags[] ->
  } | order(_updatedAt desc)
`;

export const fetchProjects = async () => {
  const projects: Project[] = await sanityClient.fetch(query);

  return projects;
};
