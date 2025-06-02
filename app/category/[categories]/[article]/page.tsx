import { client } from "@/lib/sanity";
import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";

export async function generateMetadata({
  params,
}: {
  params: { article: string; categories: string };
}): Promise<Metadata> {
  const query = `*[_type == "article" && slug.current == $slug][0]{ title, excerpt }`;
  const article = await client.fetch(query, { slug: params.article });

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const query = `*[_type == "article"]{
    "article": slug.current,
    "categories": category->title
  }`;

  const articles = await client.fetch(query);

  return articles.map((article: { article: string; categories: string }) => ({
    article: article.article,
    categories: article.categories,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: { article: string; categories: string };
}) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage { asset->{url} },
    author->{name},
    category->{title},
    readTime,
    body
  }`;

  const article = await client.fetch(query, { slug: params.article });

  console.log("article", article.body);

  const parsedBody = article.body.map((block: any) => {
    try {
      const parsed = JSON.parse(block.children[0]?.text);
      console.log("parsed", parsed);
      return parsed;
    } catch (e) {
      return block;
    }
  });

  console.log("parsedBody", parsedBody);

  if (!article) {
    return <main className="text-center py-10">Article not found.</main>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {article.author?.name} · {article.readTime} ·{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      {article.mainImage?.asset?.url && (
        <div className="my-6">
          <Image
            src={article.mainImage.asset.url}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}

      <p className="text-lg text-gray-700 mb-8">{article.excerpt}</p>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText
          value={parsedBody}
          components={{
            block: {
              h2: ({ children }) => (
                <h2 className="text-xl font-bold my-4">{children}</h2>
              ),
              normal: ({ children }) => (
                <p className="text-gray-700 leading-6 mb-2">{children}</p>
              ),
            },
          }}
        />
      </article>
    </main>
  );
}
