"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  }[];
};

type Props = {
  posts: Post[];
};

const formatDate = (isoDate: string): string => {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const ArticlesByCategory = ({ posts }: Props) => {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            {posts[0].categories
              .map((cat: { title: string }) => cat.title)
              .join(", ")}
          </h1>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Insights, strategies, and timeless principles on long-term investing
            and wealth building.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-10">
          {posts.map((post, index) => {
            const categorySlug =
              post.categories[0]?.slug.current || "uncategorized";
            const articleSlug = post.slug.current;
            const fullSlug = `/category${categorySlug}/${articleSlug}`;
            return (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={fullSlug} className="block space-y-2">
                  <h2 className="text-2xl font-semibold group-hover:underline underline-offset-4 transition">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-neutral-400 mt-1">
                    {formatDate(post.publishedAt)} · {post.readingTime} min read
                  </div>
                </Link>
                <div className="border-b border-neutral-200 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCategory;
