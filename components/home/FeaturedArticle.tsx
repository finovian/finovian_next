import React from 'react';
import styles from '../../styles/backgrounds.module.css';
import Link from 'next/link';
import { getImageUrl } from '@/lib/sanity';

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
  description?: string;
  categories?: { title: string; slug: { current: string } }[];
};

type FeaturedArticleProps = {
  posts: Post[];
};

const FeaturedArticle = ({ posts }: FeaturedArticleProps) => {
  return (
    <article className="px-4 pt-5 pb-6">
      <h2 className="mb-4 text-[22px] leading-tight font-bold tracking-[-0.015em] text-foreground">
        Featured Article
      </h2>

      {posts.map((item) => (
        <div
          key={item._id}
          className="mb-6 flex flex-col gap-4 overflow-hidden rounded-lg bg-card border border-border shadow-sm md:flex-row hover:shadow-md transition-shadow"
        >
          <div
            className="aspect-video w-full rounded bg-cover bg-center bg-no-repeat md:w-1/2 md:rounded-none"
            style={{
              backgroundImage: item.mainImage
                ? `url(${getImageUrl.hero(item.mainImage)})`
                : `${styles.featuredBackground}`,
            }}
            role="img"
            aria-label={item.title}
          />

          {/* Content */}
          <div className="flex w-full flex-col justify-between gap-4 p-4 md:w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-normal font-normal text-muted-foreground capitalize">
                {item.categories?.[0]?.title || 'Uncategorized'}
              </p>

              <h3 className="text-lg leading-tight font-bold tracking-[-0.015em] text-card-foreground">
                {item.title}
              </h3>
              <p className="text-base leading-normal font-normal text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div>
              <Link
                href={`${
                  item.categories?.[0]?.slug?.current?.startsWith('/')
                    ? item.categories?.[0]?.slug?.current
                    : `/${item.categories?.[0]?.slug?.current || 'general'}`
                }/${item.slug.current}`}
                aria-label={`Read full article: ${item.title}`}
                className="inline-flex h-8 items-center justify-center rounded bg-primary px-4 text-sm leading-normal font-medium text-primary-foreground transition hover:opacity-90"
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
