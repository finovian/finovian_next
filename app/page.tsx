import CategoryHighlights from '@/components/home/CategoryHighlights';
import FeaturedArticle from '@/components/home/FeaturedArticle';
import HeroSection from '@/components/home/HeroSection';
import LatestPosts from '@/components/home/LatestPosts';
import WebVitals from '@/components/common/WebVitals';
import { getAllCategories, getFeaturedPosts, getLatestPosts } from '@/lib/queries';

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
