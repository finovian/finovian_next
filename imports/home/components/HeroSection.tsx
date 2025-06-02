import Link from "next/link";
import styles from "../../../app/styles/backgrounds.module.css";

const HeroSection = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className={`flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded items-center justify-center p-4 ${styles.heroBackground}`}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Invest Smarter. Read Deeper.
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Gain a competitive edge in the financial markets with in-depth
              analysis and actionable insights. Our blog provides the knowledge
              you need to make informed investment decisions.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#22262a] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <Link href="/category/stocks">Start Reading</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
