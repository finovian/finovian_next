import HeroSection from '@/components/home/HeroSection';
import ExploreCategories from '@/components/home/ExploreCategories';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import MarketTrends from '@/components/home/MarketTrends';
import NewsletterForm from '@/components/home/NewsletterForm';
import SEO from '@/components/common/SEO';


export default function Home() {



  return (
    <>
      <SEO title="Home - Finovian" description="Insights to help you think better, invest smarter, and stay ahead." />
      <main className="flex flex-col space-y-20">
        <HeroSection />

        {/* Bold tagline:
        "Smarter Stock Insights. Sharper Strategies. Better Returns."

        Subtext:
        "Weekly expert stock analysis, macro trends, and insider moves — trusted by thousands of investors."

        Email signup bar (like fs.blog's "Brain Food" newsletter). */}

        <ExploreCategories /> {/* Category Explorer	Stock / Strategy / Earnings / Trends / Macro / Sectors / Insiders */}
        <FeaturedArticles /> {/* Recent Stock Deep Dives */}

        {/* Recent Stock Deep Dives

        Apple (AAPL): Can Innovation Outpace Valuation?

        NVIDIA (NVDA): AI Boom or Bubble?

        Tesla (TSLA): Margin Pressure Rising

        Meta (META): Rebound or Short-Lived Rally?

        Microsoft (MSFT): Cloud Growth Slowing?

        → [See all analyses] */}

        <MarketTrends />


        {/* Top Investment Strategies You Must Know
        "Master the art of investing with time-tested strategies."

        📈 Value Investing: Find Undervalued Stocks

        🚀 Growth Investing: Bet on Tomorrow’s Winners

        💵 Dividend Investing: Earn Passive Income

        🛡️ Defensive Strategies: Protect Against Downturns

        → [Explore Strategies] */}
        <NewsletterForm />

        {/*      📬 [Join Our Free Newsletter] (Red button like "Become a Member")

        Small text links below:

        Stock Analysis

        Investment Strategies

        Earnings Season Calendar

        Insider Buying Reports */}
      </main>

    </>
  );
}
