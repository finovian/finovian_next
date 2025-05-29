import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <div className="flex gap-4 bg-neutral-50 px-4 py-3">
        <div className="flex flex-1 flex-col justify-center">
          <Link href="/category/stocks/1">
            <p className="text-[#141414] hover:text-[#141414] hover:underline text-base font-medium leading-normal">
              Investing in the Stock Market: A Beginner&apos;s Guide
            </p>
          </Link>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Published on Jan 15, 2024 · 5 min read
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            The stock market can be a daunting place, but it doesn&apos;t have
            to be. With the right knowledge and strategies, you can navigate the
            market with confidence and achieve your financial goals.
          </p>
        </div>
      </div>

      <div className="flex gap-4 bg-neutral-50 px-4 py-3">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[#141414] text-base font-medium leading-normal">
            Diversifying Your Stock Portfolio: Strategies for Risk Management
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Published on Feb 22, 2024 · 7 min read
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Diversification is a key principle in investing, and it&apos;s
            especially important when it comes to stocks. By spreading your
            investments across different sectors and industries, you can reduce
            your overall risk and increase your chances of long-term success.
          </p>
        </div>
      </div>

      <div className="flex gap-4 bg-neutral-50 px-4 py-3">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[#141414] text-base font-medium leading-normal">
            Value Investing: Finding Undervalued Stocks with Strong Fundamentals
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Published on Mar 10, 2024 · 6 min read
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Value investing is a strategy that focuses on identifying
            undervalued stocks with strong fundamentals. This approach requires
            patience and discipline, but it can lead to significant returns over
            the long term.
          </p>
        </div>
      </div>

      <div className="flex gap-4 bg-neutral-50 px-4 py-3">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[#141414] text-base font-medium leading-normal">
            Growth Investing: Identifying Companies with High Growth Potential
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Published on Apr 5, 2024 · 8 min read
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Growth investing is a strategy that focuses on identifying companies
            with high growth potential. This approach can be riskier than value
            investing, but it also offers the potential for higher returns.
          </p>
        </div>
      </div>

      <div className="flex gap-4 bg-neutral-50 px-4 py-3">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[#141414] text-base font-medium leading-normal">
            Dividend Investing: Generating Income from Your Stock Investments
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Published on May 12, 2024 · 4 min read
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Dividend investing is a strategy that focuses on investing in
            companies that pay regular dividends to their shareholders. This
            approach can provide a steady stream of income, and it can be a good
            option for investors who are looking for a more conservative
            approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
