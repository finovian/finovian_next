import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import type { PortableTextBlock } from "@portabletext/types";

type Category = { title: string };
type Author = { name?: string };
type ArticlePreview = {
  title: string;
  slug: string;
};

type Post = {
  title: string;
  publishedAt: string;
  mainImage?: {
    asset?: {
      url?: string;
    };
    alt?: string;
  };
  body: PortableTextBlock[];
  author?: Author;
  categories?: Category[];
};

type Props = {
  post: Post;
  nextArticle?: ArticlePreview; // For "Next Article" teaser
  readMoreArticles?: ArticlePreview[]; // For read more links
};

const ArticlesPage = ({ post, nextArticle, readMoreArticles }: Props) => {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        const imageUrl = value?.asset?._ref
          ? `https://cdn.sanity.io/images/ju8y98v2/production/${value.asset._ref
              .split("-")
              .slice(1)
              .join(".")}`
          : "";

        return (
          <div className="my-4">
            <Image
              src={imageUrl}
              alt={value.alt || "Post image"}
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
    <main className="max-w-3xl mx-auto py-10 px-4 custom-padding">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt || "Post image"}
          width={800}
          height={450}
          className="rounded-md mb-6"
        />
      )}

      <div className="prose prose-lg">
        <PortableText value={post.body} components={components} />
      </div>

      <div className="mt-10 text-sm text-gray-700">
        <p>Author: {post.author?.name}</p>
        {Array.isArray(post.categories) && post.categories.length > 0 && (
          <p>
            Categories: {post.categories.map((cat) => cat.title).join(", ")}
          </p>
        )}
      </div>

      {/* NEXT ARTICLE teaser */}
      {nextArticle && (
        <section className="mt-16 p-6 border-t border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Next Article
          </h2>
          <a
            href={`/articles/${nextArticle.slug}`}
            className="text-xl text-blue-600 hover:underline"
          >
            {nextArticle.title}
          </a>
        </section>
      )}

      {/* READ MORE section */}
      {readMoreArticles && readMoreArticles.length > 0 && (
        <section className="mt-16 p-6 border-t border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Read More
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {readMoreArticles.map((article) => (
              <li key={article.slug}>
                <a
                  href={`/articles/${article.slug}`}
                  className="text-blue-600 hover:underline"
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
