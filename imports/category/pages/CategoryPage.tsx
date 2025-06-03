"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "The Power of Mental Models in Investing",
    excerpt:
      "Mental models help simplify complex decisions. Learn how to use them to become a smarter investor.",
    date: "May 30, 2025",
    readingTime: "6 min read",
    slug: "/category/stocks/mental-models-investing",
  },
  {
    id: 2,
    title: "Why Time in the Market Beats Timing the Market",
    excerpt:
      "Trying to time the market rarely works. Here's why consistency and patience matter most.",
    date: "May 28, 2025",
    readingTime: "5 min read",
    slug: "/category/stocks/mental-models-investing",
  },
  {
    id: 3,
    title: "Understanding Compounding: The 8th Wonder of the World",
    excerpt:
      "Compounding can turn small investments into huge returns — if you give it enough time.",
    date: "May 25, 2025",
    readingTime: "7 min read",
    slug: "/category/stocks/mental-models-investing",
  },
  {
    id: 4,
    title: "The Power of Mental Models in Investing",
    excerpt:
      "Mental models help simplify complex decisions. Learn how to use them to become a smarter investor.",
    date: "May 30, 2025",
    readingTime: "6 min read",
    slug: "/category/stocks/mental-models-investing",
  },
  {
    id: 5,
    title: "Why Time in the Market Beats Timing the Market",
    excerpt:
      "Trying to time the market rarely works. Here's why consistency and patience matter most.",
    date: "May 28, 2025",
    readingTime: "5 min read",
    slug: "/category/stocks/mental-models-investing",
  },
  {
    id: 6,
    title: "Understanding Compounding: The 8th Wonder of the World",
    excerpt:
      "Compounding can turn small investments into huge returns — if you give it enough time.",
    date: "May 25, 2025",
    readingTime: "7 min read",
    slug: "/category/stocks/mental-models-investing",
  },
];

const ArticlesByCategory = ({ posts }: any) => {
  console.log("posts", posts);

  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Stocks</h1>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Insights, strategies, and timeless principles on long-term investing
            and wealth building.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={article.slug} className="block space-y-2">
                <h2 className="text-2xl font-semibold group-hover:underline underline-offset-4 transition">
                  {article.title}
                </h2>
                <p className="text-neutral-600 text-base leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="text-sm text-neutral-400 mt-1">
                  {article.date} · {article.readingTime}
                </div>
              </Link>
              <div className="border-b border-neutral-200 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCategory;
