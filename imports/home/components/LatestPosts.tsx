'use client'
import React from "react";
import styles from "../../../app/styles/backgrounds.module.css";
import Link from "next/link";
import { useArticles, } from "@/hooks/usePost";

const PostCard = ({
  category,
  title,
  excerpt,
  bgClass,
  link = "#",
  ariaLabel,
}: {
  category: string;
  title: string;
  excerpt: string;
  bgClass: string;
  link?: string;
  ariaLabel: string;
}) => (
  <article className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg p-4 bg-white shadow-sm">
    <div className="flex flex-col gap-2 flex-[2_2_0px]">
      <p className="text-[#737578] text-sm font-normal">{category}</p>
      <Link href={link}>
        <h3 className="text-[#141415] hover:underline text-base font-bold leading-tight">
          {title}
        </h3>
      </Link>
      <p className="text-[#737578] text-sm font-normal">{excerpt}</p>
      <Link
        href={link}
        aria-label={`Read full post: ${title}`}
        className="text-[#22262a] text-sm font-medium mt-2 hover:underline w-fit"
      >
        Read More
      </Link>
    </div>
    <div
      className={`w-full md:w-[40%] aspect-video bg-center bg-cover bg-no-repeat rounded ${bgClass}`}
      role="img"
      aria-label={ariaLabel}
    />
  </article>
);

const LatestPosts = () => {
  const { articles } = useArticles()

  console.log('post', articles)
  return (
    <section className="px-4 py-6">
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Latest Posts
      </h2>

      <div className="space-y-6">
        <PostCard
          category="Strategy"
          title="Decoding Market Volatility: Strategies for Uncertain Times"
          excerpt="Learn how to navigate market fluctuations and protect your investments during periods of uncertainty. Discover proven strategies for managing risk and maximizing returns."
          bgClass={styles.psychologyBackground}
          ariaLabel="Market volatility strategy image"
          link="/category/strategy"
        />

        <PostCard
          category="Stocks"
          title="The Rise of Sustainable Investing: Aligning Values with Returns"
          excerpt="Explore the growing trend of ESG investing and how it's reshaping the financial landscape. Discover how to invest in companies that prioritize environmental and social responsibility."
          bgClass={styles.sustainableBackground}
          ariaLabel="Sustainable investing concept image"
          link="/category/stocks"
        />

        <PostCard
          category="Macro"
          title="Understanding Monetary Policy: A Guide for Investors"
          excerpt="Gain a deeper understanding of how central banks influence the economy and financial markets. Learn how to interpret monetary policy decisions and their potential impact on your investments."
          bgClass={styles.monetaryBackground}
          ariaLabel="Central bank monetary policy illustration"
          link="/category/macro"
        />

        <PostCard
          category="Earnings"
          title="The Psychology of Investing: Overcoming Behavioral Biases"
          excerpt="Learn how to identify and overcome common behavioral biases that can negatively impact your investment decisions. Develop a more rational and disciplined approach to investing."
          bgClass={styles.psychologyBackground}
          ariaLabel="Investor psychology concept image"
          link="/category/earnings"
        />
      </div>
    </section>
  );
};

export default LatestPosts;
