'use client';
import React from 'react';
import Link from 'next/link';
import { getImageUrl } from '@/lib/sanity';

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
      _type: 'reference';
    };
    alt?: string;
  };
  categories?: { title: string; slug: { current: string } }[];
};

type LatestPostsProps = {
  posts: Post[];
};

const PostCard = ({ category, title, excerpt, imageUrl, link = '#', ariaLabel }: PostCardProps) => (
  <article className="flex flex-col items-stretch justify-between gap-4 rounded-lg bg-white p-4 shadow-sm md:flex-row">
    <div className="flex flex-[2_2_0px] flex-col gap-2">
      <p className="text-sm font-normal text-[#737578]">{category}</p>
      <Link href={link}>
        <h3 className="text-base leading-tight font-bold text-[#141415] hover:underline">
          {title}
        </h3>
      </Link>
      <p className="text-sm font-normal text-[#737578]">{excerpt}</p>
      <Link
        href={link}
        aria-label={`Read full post: ${title}`}
        className="mt-2 w-fit text-sm font-medium text-[#22262a] hover:underline"
      >
        Read More
      </Link>
    </div>
    <div
      className="aspect-video w-full rounded bg-cover bg-center bg-no-repeat md:w-[40%]"
      style={{
        backgroundImage: `url(${imageUrl || '/default-post-image.jpg'})`,
      }}
      role="img"
      aria-label={ariaLabel}
    />
  </article>
);

const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <section className="px-4 py-6">
      <h2 className="mb-4 text-[22px] leading-tight font-bold tracking-[-0.015em] text-[#141415]">
        Latest Posts
      </h2>

      <div className="space-y-6">
        {posts?.map((item: Post) => (
          <PostCard
            key={item._id}
            category={item.categories?.[0]?.title || 'General'}
            title={item.title}
            excerpt={`Explore insights on ${item.title.toLowerCase()}, analyzing fundamentals, technicals, and expert outlook.`}
            imageUrl={item.mainImage ? getImageUrl.card(item.mainImage) : undefined}
            ariaLabel={item.title}
            link={`${
              item.categories?.[0]?.slug?.current?.startsWith('/')
                ? item.categories?.[0]?.slug?.current
                : `/${item.categories?.[0]?.slug?.current || 'general'}`
            }/${item.slug.current}`}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
