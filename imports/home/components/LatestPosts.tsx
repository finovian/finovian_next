import React from "react";
import styles from "../../../app/styles/backgrounds.module.css";

const LatestPosts = () => {
  return (
    <>
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Latest Posts
      </h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Strategy
            </p>
            <p className="text-[#141415] text-base font-bold leading-tight">
              Decoding Market Volatility: Strategies for Uncertain Times
            </p>
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Learn how to navigate market fluctuations and protect your
              investments during periods of uncertainty. Discover proven
              strategies for managing risk and maximizing returns.
            </p>
          </div>
          <div
            className={`w-full bg-center bg-no-repeat aspect-video bg-cover rounded flex-1 ${styles.latestPostBackground}`}
          />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Stocks
            </p>
            <p className="text-[#141415] text-base font-bold leading-tight">
              The Rise of Sustainable Investing: Aligning Values with Returns
            </p>
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Explore the growing trend of ESG investing and how it&apos;s
              reshaping the financial landscape. Discover how to invest in
              companies that prioritize environmental and social responsibility.
            </p>
          </div>
          <div
            className={`w-full bg-center bg-no-repeat aspect-video bg-cover rounded flex-1 ${styles.sustainableBackground}`}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Macro
            </p>
            <p className="text-[#141415] text-base font-bold leading-tight">
              Understanding Monetary Policy: A Guide for Investors
            </p>
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Gain a deeper understanding of how central banks influence the
              economy and financial markets. Learn how to interpret monetary
              policy decisions and their potential impact on your investments.
            </p>
          </div>
          <div
            className={`w-full bg-center bg-no-repeat aspect-video bg-cover rounded flex-1 ${styles.monetaryBackground}`}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Strategy
            </p>
            <p className="text-[#141415] text-base font-bold leading-tight">
              The Psychology of Investing: Overcoming Behavioral Biases
            </p>
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Learn how to identify and overcome common behavioral biases that
              can negatively impact your investment decisions. Develop a more
              rational and disciplined approach to investing.
            </p>
          </div>
          <div
            className={`w-full bg-center bg-no-repeat aspect-video bg-cover rounded flex-1 ${styles.psychologyBackground}`}
          />
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
