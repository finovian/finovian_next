import Head from "next/head";
import ArticlesPage from "@/imports/articles/pages/ArticlesPage";
import { singlePostQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";

type Props = {
  params: Promise<{
    categories: string;
    article: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;

  const post = await client.fetch(singlePostQuery, {
    slug: resolvedParams.article,
  });

  const {
    title,
    seoTitle,
    seoDescription,
    excerpt,
    mainImage,
    publishedAt,
    author,
    slug,
    tags,
  } = post;

  return (
    <>
      <Head>
        <title>{seoTitle || title}</title>
        <meta name="description" content={seoDescription || excerpt} />

        {/* Open Graph Meta */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoTitle || title} />
        <meta property="og:description" content={seoDescription || excerpt} />
        <meta property="og:image" content={mainImage?.asset?.url} />
        <meta
          property="og:url"
          content={`https://finovian.com/category/${resolvedParams.categories}/${slug}`}
        />
        <meta property="og:finovian" content="Finovian" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle || title} />
        <meta name="twitter:description" content={seoDescription || excerpt} />
        <meta name="twitter:image" content={mainImage?.asset?.url} />

        {/* SEO Tags */}
        <meta name="keywords" content={tags?.join(", ")} />
        <meta name="author" content={author?.name || "Finance Team"} />
        <meta name="robots" content="index, follow" />
        <meta
          name="publish_date"
          content={new Date(publishedAt).toISOString()}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: seoTitle || title,
              description: seoDescription || excerpt,
              image: [mainImage?.asset?.url],
              author: {
                "@type": "Person",
                name: author?.name || "Finance Team",
              },
              publisher: {
                "@type": "Organization",
                name: "Finovian",
                logo: {
                  "@type": "ImageObject",
                  url: "https://finovian.com/logo.png",
                },
              },
              datePublished: publishedAt,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://finovian.com/category/${resolvedParams.categories}/${slug}`,
              },
            }),
          }}
        />
      </Head>

      <ArticlesPage
        post={post}
        nextArticle={{
          title: "Next Big Stock Insight",
          slug: "next-big-stock-insight",
        }}
        readMoreArticles={[
          { title: "Investing Basics ", slug: "investing-basics" },
          { title: "Financial Planning 101", slug: "financial-planning-101" },
        ]}
      />
    </>
  );
}
