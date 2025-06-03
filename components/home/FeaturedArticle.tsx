"use client";
import React from "react";
import styles from "../../app/styles/backgrounds.module.css";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { client } from "@/lib/sanity";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  description?: string;
  categories?: { title: string; slug: { current: string } }[];
};

type FeaturedArticleProps = {
  posts: Post[];
};

const FeaturedArticle = ({ posts }: FeaturedArticleProps) => {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: Image) => builder.image(source);

  return (
    <article className="px-4 pt-5 pb-6">
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Featured Article
      </h2>

      {posts.map((item) => (
        <div
          key={item._id}
          className="flex flex-col md:flex-row gap-4 bg-white rounded-lg overflow-hidden mb-6"
        >
          <div
            className={`w-full md:w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded md:rounded-none`}
            style={{
              backgroundImage: item.mainImage
                ? `url(${urlFor(item?.mainImage).url()})`
                : `${styles.featuredBackground}`,
            }}
            role="img"
            aria-label={item.title}
          />

          {/* Content */}
          <div className="flex flex-col justify-between gap-4 p-4 w-full md:w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-[#737578] text-sm font-normal leading-normal capitalize">
                {item.categories?.[0]?.title || "Uncategorized"}
              </p>

              <h3 className="text-[#141415] text-lg font-bold leading-tight tracking-[-0.015em]">
                {item.title}
              </h3>
              <p className="text-[#737578] text-base font-normal leading-normal">
                {item.description}
              </p>
            </div>

            <div>
              <Link
                href={`/category/${
                  item.categories?.[0]?.slug?.current || "general"
                }/${item.slug.current}`}
                aria-label={`Read full article: ${item.title}`}
                className="inline-flex items-center justify-center h-8 px-4 rounded bg-[#22262a] text-white text-sm font-medium leading-normal transition hover:bg-[#1b1f23]"
              >
                <span className="truncate">Read More</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default FeaturedArticle;
