import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";



console.log('Project ID:', process.env.REACT_APP_SANITY_PROJECT_ID);

if (!process.env.REACT_APP_SANITY_PROJECT_ID) {
  throw new Error('Sanity Project ID is missing. Check your .env file.');
}
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-07-22",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN ,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
