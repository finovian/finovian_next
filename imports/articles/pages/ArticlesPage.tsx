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
          <figure className="-mx-6 my-16 sm:-mx-12 lg:-mx-20">
            <Image
              src={imageUrl}
              alt={value.alt || 'Article image'}
              width={1400}
              height={700}
              className="h-auto w-full object-cover shadow-sm"
              priority={false}
            />
            {value.alt && (
              <figcaption className="mt-4 text-center text-sm font-light tracking-wide text-gray-500">
                {value.alt}
              </figcaption>
            )}
          </figure>
        );
      },
    },
    block: {
      normal: ({ children }) => (
        <p className="mb-8 text-lg leading-9 font-light tracking-wide text-gray-800">{children}</p>
      ),
      h1: ({ children }) => (
        <h1 className="mt-16 mb-8 text-3xl leading-tight font-bold tracking-tight text-black sm:text-4xl">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="mt-14 mb-6 text-2xl leading-tight font-semibold tracking-tight text-black sm:text-3xl">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="mt-12 mb-5 text-xl leading-tight font-medium text-black sm:text-2xl">
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-12 border-l-2 border-black bg-gray-50 px-8 py-6 text-lg leading-8 font-light text-gray-700 italic">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mb-8 space-y-3 text-lg font-light text-gray-800">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="mb-8 space-y-3 text-lg font-light text-gray-800">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="flex items-start leading-8">
          <span className="mt-3 mr-4 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-black"></span>
          <span>{children}</span>
        </li>
      ),
      number: ({ children }) => (
        <li className="ml-6 list-inside list-decimal leading-8">{children}</li>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
      em: ({ children }) => <em className="font-light text-gray-700 italic">{children}</em>,
      link: ({ children, value }) => (
        <a
          href={value?.href}
          className="text-black underline decoration-1 underline-offset-4 transition-all duration-300 hover:no-underline"
          target={value?.blank ? '_blank' : undefined}
          rel={value?.blank ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white antialiased">
      <article className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <header className="pt-20 pb-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
              {post.title}
            </h1>

            <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium tracking-wide text-gray-500 sm:flex-row sm:gap-8">
              <time dateTime={post.publishedAt} className="uppercase">
                {formatDate(post.publishedAt)}
              </time>

              {post.author?.name && (
                <>
                  <span className="hidden h-4 w-px bg-gray-300 sm:block"></span>
                  <span className="tracking-wider uppercase">By {post.author.name}</span>
                </>
              )}

              {post.categories && post.categories.length > 0 && (
                <>
                  <span className="hidden h-4 w-px bg-gray-300 sm:block"></span>
                  <span className="tracking-wider uppercase">
                    {post.categories.map((cat) => cat.title).join(' • ')}
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        {post.mainImage && (
          <figure className="-mx-6 mb-20 sm:-mx-12 lg:-mx-20">
            <Image
              src={getImageUrl.hero(post.mainImage)}
              alt={post.mainImage.alt || 'Article cover image'}
              width={1400}
              height={700}
              className="h-auto w-full object-cover shadow-sm"
              priority={true}
            />
            {post.mainImage.alt && (
              <figcaption className="mt-6 text-center text-sm font-light tracking-wide text-gray-500">
                {post.mainImage.alt}
              </figcaption>
            )}
          </figure>
        )}

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="prose-custom">
            <PortableText value={post.body} components={components} />
          </div>
        </div>

        {/* <footer className="mx-auto mt-20 max-w-3xl border-t border-gray-200 pt-12">
          <div className="flex flex-col gap-6 text-sm font-medium text-gray-600 sm:flex-row">
            {post.author?.name && (
              <div className="flex items-center gap-2">
                <span className="font-semibold tracking-wide text-black">AUTHOR</span>
                <span className="tracking-wide">{post.author.name}</span>
              </div>
            )}
            {post.categories && post.categories.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="font-semibold tracking-wide text-black">CATEGORIES</span>
                <span className="tracking-wide">
                  {post.categories.map((cat, index) => (
                    <span key={cat.title}>
                      {cat.title}
                      {index < post.categories!.length - 1 && ' • '}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
        </footer> */}
      </article>
      {readMoreArticles && readMoreArticles.length > 0 && (
        <section className="">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-black">Continue Reading</h2>

              <div className="space-y-6">
                {readMoreArticles.map((article) => (
                  <article key={article.slug.current} className="group">
                    <a
                      href={`${
                        article.categories?.[0]?.slug?.current?.startsWith('/')
                          ? article.categories?.[0]?.slug?.current
                          : `/${article.categories?.[0]?.slug?.current || 'general'}`
                      }/${article.slug.current}`}
                      className="block transition-all duration-200 hover:underline"
                    >
                      <h3 className="text-xl leading-tight font-semibold text-black transition-colors duration-200 group-hover:text-gray-700">
                        {article.title}
                      </h3>
                      <div className="mt-2 flex items-center text-sm text-gray-500 underline-offset-0">
                        <span>Read article</span>
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlesPage;
