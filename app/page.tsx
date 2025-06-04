import Head from "next/head";
import CategoryHighlights from "@/components/home/CategoryHighlights";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import HeroSection from "@/components/home/HeroSection";
import LatestPosts from "@/components/home/LatestPosts";
import {
  getAllCategories,
  getFeaturedPosts,
  getLatestPosts,
} from "@/lib/queries";

export default async function Home() {
  const [latestPosts, featuredPosts, categories] = await Promise.all([
    getLatestPosts(),
    getFeaturedPosts(),
    getAllCategories(),
  ]);

  // Update these for your actual site info
  const siteName = "Finance Insights Blog";
  const siteUrl = "https://yourdomain.com";
  const siteLogo = "https://yourdomain.com/logo.png";
  const seoTitle = "Finance Insights – Latest Stock Market & AI News";
  const seoDescription =
    "Stay updated with the latest articles on stocks, finance, and artificial intelligence. Expert analysis, news, and investing tips all in one place.";
  const canonicalUrl = siteUrl;

  // JSON-LD schema combining Website + Organization + SearchAction
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: siteLogo,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Finance, Stock Market, AI, Investing, Trading"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={siteLogo} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={siteLogo} />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <HeroSection />
      <FeaturedArticle posts={featuredPosts} />
      <LatestPosts posts={latestPosts} />
      <CategoryHighlights caetegories={categories} />
    </>
  );
}
