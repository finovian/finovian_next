import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import React from 'react';
import type { PortableTextBlock } from '@portabletext/types';
import { getImageUrl } from '@/lib/sanity';

type Category = { title: string };
type Author = { name?: string };
type ArticlePreview = {
  title: string;
  slug: {
    current: string;
  };
  categories?: {
    slug?: {
      current?: string;
    };
  }[];
};

type Post = {
  title: string;
  publishedAt: string;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  body: PortableTextBlock[];
  author?: Author;
  categories?: Category[];
};

type Props = {
  post: Post;
  readMoreArticles?: ArticlePreview[];
};

const ArticlesPage = ({ post, readMoreArticles }: Props) => {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;

        const imageUrl = getImageUrl.hero(value);

        return (
          <div className="my-4">
            <Image
              src={imageUrl}
              alt={value.alt || 'Post image'}
              width={800}
              height={450}
              className="rounded-lg"
            />
          </div>
        );
      },
    },
  };

  return (
    <main className="mx-auto px-6 py-10">
      <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
      <p className="mb-4 text-sm text-gray-500">{new Date(post.publishedAt).toDateString()}</p>

      {post.mainImage && (
        <Image
          src={getImageUrl.hero(post.mainImage)}
          alt={post.mainImage.alt || 'Post image'}
          width={800}
          height={450}
          className="mb-6 rounded-md"
        />
      )}

      <div className="prose prose-lg">
        <PortableText value={post.body} components={components} />
      </div>

      <div className="mt-10 text-sm text-gray-700">
        <p>Author: {post.author?.name}</p>
        {Array.isArray(post.categories) && post.categories.length > 0 && (
          <p>Categories: {post.categories.map((cat) => cat.title).join(', ')}</p>
        )}
      </div>

      {readMoreArticles && readMoreArticles.length > 0 && (
        <section className="mt-16 border-t border-gray-300 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-black">Read More</h2>
          <ul className="list-inside list-disc space-y-2">
            {readMoreArticles.map((article) => (
              <li key={article.slug.current}>
                <a
                  href={`${
                    article.categories?.[0]?.slug?.current?.startsWith('/')
                      ? article.categories?.[0]?.slug?.current
                      : `/${article.categories?.[0]?.slug?.current || 'general'}`
                  }/${article.slug.current}`}
                  className="text-black hover:underline"
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};

export default ArticlesPage;
