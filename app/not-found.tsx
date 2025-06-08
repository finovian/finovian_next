import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <h1 className="tracking-light px-4 pt-6 pb-3 text-center text-[32px] leading-tight font-bold text-[#141414]">
        404 — Page Not Found
      </h1>
      <p className="px-4 pt-1 pb-3 text-center text-base leading-normal font-normal text-[#141414]">
        The page you’re looking for doesn’t exist, or it may have moved.
      </p>
      <div className="flex justify-center">
        <div className="flex max-w-[480px] flex-1 flex-col items-stretch gap-3 px-4 py-3">
          <Link href="/">
            <button className="flex h-10 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#ededed] px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#141414]">
              <span className="truncate">→ Go back home</span>
            </button>
          </Link>
          <button className="flex h-10 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#ededed] px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#141414]">
            <span className="truncate">→ Browse articles</span>
          </button>
          <Link href="/contact">
            <button className="flex h-10 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#ededed] px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#141414]">
              <span className="truncate">→ Contact me</span>
            </button>
          </Link>
        </div>
      </div>
      <p className="px-4 pt-1 pb-3 text-center text-sm leading-normal font-normal text-neutral-500 underline">
        You might enjoy reading about The Power of Compound Interest
      </p>
    </>
  );
};

export default NotFound;
