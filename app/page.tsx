// import SEO from "@/components/common/SEO";
import ExploreCategories from "@/components/home/ExploreCategories";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import HeroSection from "@/components/home/HeroSection";
import MarketTrends from "@/components/home/MarketTrends";
import NewsletterForm from "@/components/home/NewsletterForm";

export default function Home() {
  return (
    <>
      {/* <SEO
        title="Home - Finovian"
        description="Insights to help you think better, invest smarter, and stay ahead."
      /> */}
      <main className="flex-grow">
        <HeroSection />
        <ExploreCategories />
        <FeaturedArticles />
        <MarketTrends />
        <NewsletterForm />
      </main>
    </>
  );
}
