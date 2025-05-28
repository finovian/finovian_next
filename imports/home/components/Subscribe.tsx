import React from "react";

const Subscribe = () => {
  return (
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
  );
};

export default Subscribe;
