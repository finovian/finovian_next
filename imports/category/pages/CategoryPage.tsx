'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mosaic } from 'react-loading-indicators';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="z-[9999] flex h-screen items-center justify-center overflow-hidden bg-[var(--bgColor)] dark:bg-[var(--bgColor)]">
        <Mosaic color="#3168cc" size="large" text="" textColor="#NaNNaNNaN" />
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
          <div className="text-center">
            <h1 className="text-foreground mb-4 text-3xl font-semibold">No Articles Found</h1>
            <p className="text-muted-foreground text-lg">
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
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-10">
          <h1 className="text-foreground mb-2 text-4xl font-bold tracking-tight">{categories}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
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
                  <h2 className="text-foreground group-hover:text-primary text-2xl font-semibold underline-offset-4 transition-colors group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">{post.excerpt}</p>
                  <div className="text-muted-foreground mt-1 text-sm">
                    {formatDate(post.publishedAt)} · {post.readingTime} min read
                  </div>
                </Link>
                <div className="border-border mt-6 border-b" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCategory;
