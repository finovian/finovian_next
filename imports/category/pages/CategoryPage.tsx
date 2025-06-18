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
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-semibold text-foreground">No Articles Found</h1>
            <p className="text-lg text-muted-foreground">
              There are currently no articles in this category. Please check back later or explore
              other categories.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const categories = posts[0]?.categories?.length
    ? posts[0].categories.map((cat) => cat.title).join(', ')
    : 'Uncategorized';

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-10">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground">{categories}</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {posts[0].categories[0].description}
          </p>
        </div>

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
                  <h2 className="text-2xl font-semibold text-foreground underline-offset-4 transition-colors group-hover:underline group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {formatDate(post.publishedAt)} · {post.readingTime} min read
                  </div>
                </Link>
                <div className="mt-6 border-b border-border" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCategory;
