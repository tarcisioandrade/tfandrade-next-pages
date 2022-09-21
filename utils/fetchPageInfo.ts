import { PageInfo } from "../@types/sanity";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "pageInfo"][0] {
    ...,
    skills[]->,
    socials[] ->
  }
`;

export const fetchPageInfo = async () => {
  const data: PageInfo = await sanityClient.fetch(query);
  const pageInfo: PageInfo = data;

  return pageInfo;
};
