import { createClient } from "next-sanity";
import { Image } from "./interfaces/sanity";
// @ts-ignore // Infelizmente o sanity-image-url nao dispoe de typagens ainda.
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  apiVersion: "2021-03-25",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source: Image) =>
  createImageUrlBuilder(config).image(source);
