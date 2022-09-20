import type { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { Project } from "../../@types/sanity";
import { sanityClient } from "../../sanity";

const query = groq`
  *[_type == "projects"] {
    ...,
    tags[] ->
  }
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
