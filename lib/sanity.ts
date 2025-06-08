import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

const config = {
  projectId: "ju8y98v2",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true, // Enable CDN for better performance
  token:
    "sklt137lz2H7GldZYEmz6L1nknK5bFiC632jgGhTyMEo4uAop9JuTx7vnHvqn2dKZXwPjsJQcOEPkyRCFiIyv9UFBvI7FRDek2yHc4sKjk3omHivD9r1killcg236Z59xN2LPLX47fK1Z6TeWHMS32vqJjKxqlenHOhHUrLDRpg1KPIBIOsw",
};

export const client = createClient(config);

// Create image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source: Image) => builder.image(source);

// Common image URL generators with proper dimensions
export const getImageUrl = {
  // For hero/featured images
  hero: (source: Image) =>
    urlFor(source).width(1200).height(675).quality(90).format("webp").url(),
  // For card images
  card: (source: Image) =>
    urlFor(source).width(800).height(450).quality(85).format("webp").url(),
  // For thumbnails
  thumbnail: (source: Image) =>
    urlFor(source).width(300).height(200).quality(80).format("webp").url(),
  // For author images
  author: (source: Image) =>
    urlFor(source).width(128).height(128).quality(85).format("webp").url(),
  // Original URL without transformations
  original: (source: Image) => urlFor(source).url(),
};
