import { PageInfo } from "../interfaces/sanity";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchPageInfo = async (locale: string = "pt") => {
  const query = groq`
  *[_type == "pageInfo"][0] {
    ...,
    "intro": intro.${locale},
    "role": role.${locale},
    skills[]->,
    socials[] ->,
    "curriculum": curriculum.asset->url
  }
`;
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  return pageInfo;
};
