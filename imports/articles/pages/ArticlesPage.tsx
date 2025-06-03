import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import React from "react";

const ArticlesPage = ({ post }: any) => {
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
    <main className="max-w-3xl mx-auto py-10 px-4">
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
        {post.categories?.length > 0 && (
          <p>
            Categories:{" "}
            {post.categories
              .map((cat: { title: string }) => cat.title)
              .join(", ")}
          </p>
        )}
      </div>
    </main>
  );
};

export default ArticlesPage;
