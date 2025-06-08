import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
        404 — Page Not Found
      </h1>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        The page you’re looking for doesn’t exist, or it may have moved.
      </p>
      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
          <Link href="/">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ededed] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] w-full">
              <span className="truncate">→ Go back home</span>
            </button>
          </Link>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ededed] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] w-full">
            <span className="truncate">→ Browse articles</span>
          </button>
          <Link href="/contact">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ededed] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em] w-full">
              <span className="truncate">→ Contact me</span>
            </button>
          </Link>
        </div>
      </div>
      <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
        You might enjoy reading about The Power of Compound Interest
      </p>
    </>
  );
};

export default NotFound;
