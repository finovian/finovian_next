import Link from 'next/link';
import styles from '../../styles/backgrounds.module.css';

const HeroSection = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className={`flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 @[480px]:gap-8 @[480px]:rounded ${styles.heroBackground}`}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-4xl leading-tight font-black tracking-[-0.033em] text-white @[480px]:text-5xl @[480px]:leading-tight @[480px]:font-black @[480px]:tracking-[-0.033em]">
              Invest Smarter. Read Deeper.
            </h1>
            <h2 className="text-sm leading-normal font-normal text-white @[480px]:text-base @[480px]:leading-normal @[480px]:font-normal">
              Gain a competitive edge in the financial markets with in-depth analysis and actionable
              insights. Our blog provides the knowledge you need to make informed investment
              decisions.
            </h2>
          </div>
          <Link 
            href="/category/stocks"
            className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded bg-primary px-4 text-sm leading-normal font-bold tracking-[0.015em] text-primary-foreground @[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:leading-normal @[480px]:font-bold @[480px]:tracking-[0.015em] transition hover:opacity-90"
            aria-label="Start reading financial analysis and stock insights"
          >
            Start Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
