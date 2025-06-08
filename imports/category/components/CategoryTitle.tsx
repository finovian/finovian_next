import React from 'react';

const CategoryTitle = () => {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="tracking-light text-[32px] leading-tight font-bold text-[#141414]">Stocks</p>
        <p className="text-sm leading-normal font-normal text-neutral-500">
          In-depth research and insights into individual US companies and trends.
        </p>
      </div>
    </div>
  );
};

export default CategoryTitle;
