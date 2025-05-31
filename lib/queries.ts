// lib/queries.ts
export const allPostsQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    _createdAt
  }`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    _createdAt,
    "author": author->name
  }`;
