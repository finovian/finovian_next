import { Metadata } from 'next';
import ArticlesPage from '@/imports/articles/pages/ArticlesPage';
import { latestPostsQueryinSort, singlePostQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';
import {
  generateMetadata as genMeta,
  generateArticleSchema,
  generateBreadcrumbSchema,
  siteConfig,
} from '@/lib/seo';
import WebVitals from '@/components/common/WebVitals';

type Props = {
  params: Promise<{
    categories: string;
    article: string;
  }>;
};

// Generate metadata for this page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;

  try {
    const post = await client.fetch(singlePostQuery, {
      slug: resolvedParams.article,
    });

    if (!post) {
      return genMeta({
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
        noIndex: true,
      });
    }

    return genMeta({
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      image: post.mainImage,
      canonical: `/category/${resolvedParams.categories}/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'Finovian Team'],
      tags: post.tags,
      category: resolvedParams.categories,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error generating metadata:', error);
    }
    return genMeta({
      title: 'Error Loading Article',
      description: 'There was an error loading this article.',
      noIndex: true,
    });
  }
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;

  const [post, latestPosts] = await Promise.all([
    client.fetch(singlePostQuery, { slug: resolvedParams.article }),
    client.fetch(latestPostsQueryinSort),
  ]);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold">Article Not Found</h1>
        <p>The requested article could not be found.</p>
      </div>
    );
  }

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    image: post.mainImage,
    publishedTime: post.publishedAt,
    author: post.author?.name || 'Finovian Team',
    category: resolvedParams.categories,
    tags: post.tags,
    url: `${siteConfig.url}/category/${resolvedParams.categories}/${post.slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    {
      name: resolvedParams.categories,
      url: `${siteConfig.url}/category/${resolvedParams.categories}`,
    },
    {
      name: post.title,
      url: `${siteConfig.url}/category/${resolvedParams.categories}/${post.slug}`,
    },
  ]);

  return (
    <>
      {/* Web Vitals monitoring */}
      <WebVitals />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [articleSchema, breadcrumbSchema],
          }),
        }}
      />

      <ArticlesPage post={post} readMoreArticles={latestPosts} />
    </>
  );
}
