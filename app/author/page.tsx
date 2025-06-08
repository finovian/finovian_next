import AuthorPage from '@/imports/author/AuthorPage';
import { featuredPostsQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';
import React from 'react';

const page = async () => {
  const featuredPosts = await client.fetch(featuredPostsQuery, {});
  return (
    <>
      <AuthorPage posts={featuredPosts} />
    </>
  );
};

export default page;
