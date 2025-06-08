"use client";
import React from "react";
import Link from "next/link";
import type { Image } from "@sanity/types";
import { getImageUrl } from "@/lib/sanity";

type PostCardProps = {
  category: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  link?: string;
  ariaLabel: string;
};

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
  categories?: { title: string; slug: { current: string } }[];
};

type LatestPostsProps = {
  posts: Post[];
};

const PostCard = ({
  category,
  title,
  excerpt,
  imageUrl,
  link = "#",
  ariaLabel,
}: PostCardProps) => (
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
      className="w-full md:w-[40%] aspect-video bg-center bg-cover bg-no-repeat rounded"
      style={{
        backgroundImage: `url(${imageUrl || "/default-post-image.jpg"})`,
      }}
      role="img"
      aria-label={ariaLabel}
    />
  </article>
);

const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <section className="px-4 py-6">
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Latest Posts
      </h2>

      <div className="space-y-6">
        {posts?.map((item: Post) => (
          <PostCard
            key={item._id}
            category={item.categories?.[0]?.title || "General"}
            title={item.title}
            excerpt={`Explore insights on ${item.title.toLowerCase()}, analyzing fundamentals, technicals, and expert outlook.`}
            imageUrl={
              item.mainImage
                ? getImageUrl.card(item.mainImage)
                : undefined
            }
            ariaLabel={item.title}
            link={`${(item.categories?.[0]?.slug?.current?.startsWith("/")
              ? item.categories?.[0]?.slug?.current
              : `/${item.categories?.[0]?.slug?.current || "general"}`
            )}/${item.slug.current}`}

          />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
