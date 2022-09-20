import { Tag } from "../@types/sanity";

export const fetchTags = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTags`);
  const data = await res.json();
  const tags: Tag[] = data.tags;

  return tags;
};
