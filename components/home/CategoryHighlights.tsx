import Link from "next/link";
import React, { JSX } from "react";

const catIcon: Record<string, JSX.Element> = {
  Stocks: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" />
    </svg>
  ),
  Strategy: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
    </svg>
  ),
  Macro: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z" />
    </svg>
  ),
  Earnings: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM152,120a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V128H112a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v24h8A8,8,0,0,1,152,120Z" />
    </svg>
  ),
};

type Category = {
  title: string;
  slug: { current: string };
  description?: string;
};

type LatestPostsProps = {
  caetegories: Category[];
};

const CategoryHighlights = ({ caetegories }: LatestPostsProps) => {
  return (
    <section
      aria-labelledby="category-highlights-heading"
      className="w-full max-w-screen-xl mx-auto px-4 py-6"
    >
      <h2
        id="category-highlights-heading"
        className="text-[#141415] text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] mb-4"
      >
        Category Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {caetegories.map((cat) => (
          <Link
            key={cat.title}
            href={`/category/${cat.slug.current}`}
            className="rounded border border-[#e0e0e1] bg-white p-4 flex flex-col gap-3 hover:shadow transition"
            aria-label={cat.title}
          >
            <span className="text-[#141415]">{catIcon[cat.title]}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#141415] text-base font-bold leading-tight">
                {cat.title}
              </h3>
              <p className="text-[#737578] text-sm font-normal leading-normal">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryHighlights;
