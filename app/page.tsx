import CategoryHighlights from '@/components/home/CategoryHighlights';
import FeaturedArticle from '@/components/home/FeaturedArticle';
import HeroSection from '@/components/home/HeroSection';
import LatestPosts from '@/components/home/LatestPosts';
import WebVitals from '@/components/common/WebVitals';
import { getAllCategories, getFeaturedPosts, getLatestPosts } from '@/lib/queries';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Expert Financial Insights & Investment Analysis',
  description: 'Stay ahead with comprehensive market analysis, stock insights, and AI-driven financial content. Expert investment strategies and financial planning advice.',
  canonical: '/',
});

export default async function Home() {
  const [latestPosts, featuredPosts, categories] = await Promise.all([
    getLatestPosts(),
    getFeaturedPosts(),
    getAllCategories(),
  ]);

  return (
    <>
      <WebVitals />

      <HeroSection />
      <FeaturedArticle posts={featuredPosts} />
      <LatestPosts posts={latestPosts} />
      <CategoryHighlights caetegories={categories} />
    </>
  );
}
