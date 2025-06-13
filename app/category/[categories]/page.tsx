import ArticlesByCategory from '@/imports/category/pages/CategoryPage';
import { postsByCategorySlugQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    categories: string;
    article: string;
  }>;
};

// Generate metadata for this page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = resolvedParams.categories.charAt(0).toUpperCase() + resolvedParams.categories.slice(1);
  
  return genMeta({
    title: `${categoryName} - Financial News & Analysis`,
    description: `Explore the latest ${categoryName.toLowerCase()} news, analysis, and insights. Expert financial content covering market trends, investment opportunities, and strategic advice.`,
    canonical: `/category/${resolvedParams.categories}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;

  const posts = await client.fetch(postsByCategorySlugQuery, {
    slug: `category/${resolvedParams.categories}`,
  });

  return <ArticlesByCategory posts={posts} />;
}
