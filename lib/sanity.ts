import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';

const config = {
  projectId: process.env.NEXT_PROJECT_ID,
  dataset: process.env.NEXT_DATASET,
  apiVersion: process.env.NEXT_API_VERSION,
  useCdn: true,
  timeout: 30000,
  retryDelay: (attemptNumber: number) => Math.min(1000 * 2 ** attemptNumber, 16000),
  maxRetries: 3,
  token: process.env.NEXT_SANITY_TOKEN,
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image) => builder.image(source);

export const getImageUrl = {
  // For hero/featured images
  hero: (source: Image) => urlFor(source).width(1200).height(675).quality(90).format('webp').url(),
  // For card images
  card: (source: Image) => urlFor(source).width(800).height(450).quality(85).format('webp').url(),
  // For thumbnails
  thumbnail: (source: Image) =>
    urlFor(source).width(300).height(200).quality(80).format('webp').url(),
  // For author images
  author: (source: Image) => urlFor(source).width(128).height(128).quality(85).format('webp').url(),
  // Original URL without transformations
  original: (source: Image) => urlFor(source).url(),
};
