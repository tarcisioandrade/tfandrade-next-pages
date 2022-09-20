import type { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { Tag } from "../../@types/sanity";
import { sanityClient } from "../../sanity";

const query = groq`
  *[_type == "tag"]
`;

type Data = {
  tags: Tag[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tags: Tag[] = await sanityClient.fetch(query);

  res.status(200).json({ tags });
}
