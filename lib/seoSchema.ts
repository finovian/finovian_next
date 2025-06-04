// lib/seoSchema.ts

export function generateArticleSchema({
  title,
  seoTitle,
  seoDescription,
  excerpt,
  mainImage,
  author,
  publishedAt,
  slug,
  category,
}: {
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  excerpt?: string;
  mainImage?: { asset?: { url?: string } };
  author?: { name?: string };
  publishedAt: string;
  slug: string;
  category: string;
}) {
  return {
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
      name: "Your Blog Site Name", // Replace with actual
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png", // Replace with your real logo URL
      },
    },
    datePublished: publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/category/${category}/${slug}`,
    },
  };
}
