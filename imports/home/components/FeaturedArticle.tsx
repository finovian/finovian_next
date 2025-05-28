import React from "react";
import styles from "../../../app/styles/backgrounds.module.css";

const FeaturedArticle = () => {
  return (
    <>
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
                Explore the key trends shaping the technology landscape, from AI
                and machine learning to the metaverse and beyond. Understand the
                investment implications and opportunities.
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-8 px-4 bg-[#22262a] text-white text-sm font-medium leading-normal">
                <span className="truncate">Read More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedArticle;
