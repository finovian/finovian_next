import { client } from "./sanity";

export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    publishedAt,
    body,
    mainImage {
      asset-> {
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset-> {
          url
        }
      }
    },
    categories[]->{
      title
    }
  }
`;

export const latestPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...5] {
  _id,
  title,
  slug,
  publishedAt,
  featured,
  mainImage,
  "author": author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`;

export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...5] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "author": author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`;

export const allCategoriesQuery = `*[_type == "category"] {
  _id,
  title,
  slug,
  description,
  iconName
}`;

export const postsByCategorySlugQuery = `
  *[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    description,
    categories[]->{
      _id,
      title,
      slug
    }
  }
`;

export const searchPostsQuery = (query: string) => `
*[_type == "post" && (
  title match "${query}*" ||
  pt::text(body) match "${query}*" ||
  array::join(tags, " ") match "${query}*" ||
  author->name match "${query}*"
)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "author": author->{name, image},
  categories[]->{title, slug}
}
`;

export const getAllCategories = async () => {
  return await client.fetch(allCategoriesQuery);
};

export const getSinglePost = async (slug: string) => {
  return await client.fetch(singlePostQuery, { slug });
};

export const getLatestPosts = async () => {
  return await client.fetch(latestPostsQuery);
};

export const getFeaturedPosts = async () => {
  return await client.fetch(featuredPostsQuery);
};
