import React from "react";
import styles from "../../../app/styles/backgrounds.module.css";
import Link from "next/link";

const FeaturedArticle = () => {
  return (
    <article className="px-4 pt-5 pb-6">
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Featured Article
      </h2>

      <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg overflow-hidden">
        <div
          className={`w-full md:w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded md:rounded-none ${styles.featuredBackground}`}
          role="img"
          aria-label="Futuristic tech illustration"
        />

        {/* Content */}
        <div className="flex flex-col justify-between gap-4 p-4 w-full md:w-1/2">
          <div className="flex flex-col gap-2">
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Stocks
            </p>

            <h3 className="text-[#141415] text-lg font-bold leading-tight tracking-[-0.015em]">
              The Future of Tech: Navigating the Next Decade
            </h3>

            <p className="text-[#737578] text-base font-normal leading-normal">
              Explore the key trends shaping the technology landscape, from AI
              and machine learning to the metaverse and beyond. Understand the
              investment implications and opportunities.
            </p>
          </div>

          <div>
            <Link
              href="/category/stocks"
              aria-label="Read full article: The Future of Tech"
              className="inline-flex items-center justify-center h-8 px-4 rounded bg-[#22262a] text-white text-sm font-medium leading-normal transition hover:bg-[#1b1f23]"
            >
              <span className="truncate">Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
