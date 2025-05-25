import styles from './styles/backgrounds.module.css';

export default function Home() {
  return (
    <>

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
                analysis and actionable insights. Our blog provides the
                knowledge you need to make informed investment decisions.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#22262a] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Start Reading</span>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Article
      </h2>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded @xl:flex-row @xl:items-start">
          <div
            className={`w-full bg-center bg-no-repeat aspect-video bg-cover rounded ${styles.featuredBackground}`}
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Stocks
            </p>
            <p className="text-[#141415] text-lg font-bold leading-tight tracking-[-0.015em]">
              The Future of Tech: Navigating the Next Decade
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-[#737578] text-base font-normal leading-normal">
                Explore the key trends shaping the technology landscape, from
                AI and machine learning to the metaverse and beyond.
                Understand the investment implications and opportunities.
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-8 px-4 bg-[#22262a] text-white text-sm font-medium leading-normal">
                <span className="truncate">Read More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
              companies that prioritize environmental and social
              responsibility.
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
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Category Highlights
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded border border-[#e0e0e1] bg-white p-4 flex-col">
          <div
            className="text-[#141415]"
            data-icon="ChartLine"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#141415] text-base font-bold leading-tight">
              Stocks
            </h2>
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Insights on individual companies, market trends, and investment
              opportunities.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded border border-[#e0e0e1] bg-white p-4 flex-col">
          <div
            className="text-[#141415]"
            data-icon="PresentationChart"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#141415] text-base font-bold leading-tight">
              Strategy
            </h2>
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Strategies for building and managing your investment portfolio.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded border border-[#e0e0e1] bg-white p-4 flex-col">
          <div
            className="text-[#141415]"
            data-icon="Globe"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#141415] text-base font-bold leading-tight">
              Macro
            </h2>
            <p className="text-[#737578] text-sm font-normal leading-normal">
              Analysis of global economic trends and their impact on financial
              markets.
            </p>
          </div>
        </div>
      </div>
      <div className="@container">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#141415] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
              Get smarter about investing — in your inbox.
            </h1>
          </div>
          <div className="flex flex-1 justify-center">
            <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
              <div className="flex w-full flex-1 items-stretch rounded h-full">
                <input
                  placeholder="Enter your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#141415] focus:outline-0 focus:ring-0 border-none bg-[#f2f2f3] focus:border-none h-full placeholder:text-[#737578] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                  defaultValue=""
                />
                <div className="flex items-center justify-center rounded-r border-l-0 border-none bg-[#f2f2f3] pr-2">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#22262a] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Subscribe</span>
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <h2 className="text-[#141415] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        About
      </h2>
      <p className="text-[#141415] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Finance Insights is a blog dedicated to providing high-quality,
        in-depth analysis of the financial markets. Our mission is to empower
        investors with the knowledge and insights they need to make informed
        decisions and achieve their financial goals. We believe in the power
        of deep reading and critical thinking to navigate the complexities of
        the investment world.
      </p>

    </>
  );
}
