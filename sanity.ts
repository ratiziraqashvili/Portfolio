import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: "portfolioreal" || "portfolioreal",
    projectId: "49zyr5t0",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}


export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);