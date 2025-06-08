import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

const config = {
  projectId: "ju8y98v2",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true, // Enable CDN for better performance
  token:
    "skJPWCHKu2ibiDy9IuQIF7iOQFi5gIlmqvAZBP6N3P2skXE99RTonG3utWEkDImXVyOkhsdiAi2oHzhz4kqYMdj16x2sDVd0M0MHokYShpojKRae2eH6YTxMWTxlXa20dKyGFwQcDVfbUCShipdoviL07mrs0FDC1UJfG0C4TdjAzG4AVwf4",
};

export const client = createClient(config);

// Create image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source: Image) => builder.image(source);

// Common image URL generators with proper dimensions
export const getImageUrl = {
  // For hero/featured images
  hero: (source: Image) => urlFor(source).width(1200).height(675).quality(90).format('webp').url(),
  // For card images
  card: (source: Image) => urlFor(source).width(800).height(450).quality(85).format('webp').url(),
  // For thumbnails
  thumbnail: (source: Image) => urlFor(source).width(300).height(200).quality(80).format('webp').url(),
  // For author images
  author: (source: Image) => urlFor(source).width(128).height(128).quality(85).format('webp').url(),
  // Original URL without transformations
  original: (source: Image) => urlFor(source).url(),
};
