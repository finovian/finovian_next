'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Post = {
  _id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  slug: {
    current: string;
  };
  categories: {
    slug: {
      current: string;
    };
    title: string;
    description: string;
  }[];
};

type Props = {
  posts: Post[];
};

const formatDate = (isoDate: string): string => {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const ArticlesByCategory = ({ posts }: Props) => {


  if (!posts || posts.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12 text-[#1a1a1a]">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-semibold">No Articles Found</h1>
          <p className="text-lg text-neutral-600">
            There are currently no articles in this category. Please check back later or explore
            other categories.
          </p>
        </div>
      </div>
    );
  }

  // Safely get categories from the first post
  const categories = posts[0]?.categories?.length
    ? posts[0].categories.map((cat) => cat.title).join(', ')
    : 'Uncategorized';

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">{categories}</h1>
          <p className="text-lg leading-relaxed text-neutral-600">
            {posts[0].categories[0].description}
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-10">
          {posts.map((post, index) => {
            const categorySlug = post.categories?.[0]?.slug?.current || 'uncategorized';
            const articleSlug = post.slug.current;
            const fullSlug = `/${categorySlug}/${articleSlug}`;
            return (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={fullSlug} className="block space-y-2">
                  <h2 className="text-2xl font-semibold underline-offset-4 transition group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-base leading-relaxed text-neutral-600">{post.excerpt}</p>
                  <div className="mt-1 text-sm text-neutral-400">
                    {formatDate(post.publishedAt)} · {post.readingTime} min read
                  </div>
                </Link>
                <div className="mt-6 border-b border-neutral-200" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCategory;
