import React from "react";

const CategoryTitle = () => {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">
          Stocks
        </p>
        <p className="text-neutral-500 text-sm font-normal leading-normal">
          In-depth research and insights into individual US companies and
          trends.
        </p>
      </div>
    </div>
  );
};

export default CategoryTitle;
