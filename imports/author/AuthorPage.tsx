import React from "react";
import Image from "next/image";

type Post = {
  _id: string;
  title: string;
  publishedAt: string;
  slug: { current: string };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  description?: string;
  categories?: { title: string; slug: { current: string } }[];
};

type FeaturedArticleProps = {
  posts: Post[];
};

const AuthorPage = ({ posts }: FeaturedArticleProps) => {

  console.log('posts', posts)
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-8 md:px-20 py-12">
      <section className="max-w-5xl mx-auto mb-16">
        <div className="flex justify-center py-6">
          <Image
            src="/images/author.jpg"
            alt="Author profile"
            width={220}
            height={220}
            className="rounded-full object-cover border border-gray-200 shadow-sm"
          />
        </div>

        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">
              About Me
            </p>
            <p className="text-neutral-500 text-sm font-normal leading-normal">
              Why this blog exists — and who&apos;s behind it.
            </p>
          </div>
        </div>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1">
          I&apos;m Jay, a software engineer and investor with a passion for
          simplifying complex financial concepts. This blog started as a
          personal project to document my own financial journey and share
          insights with others. My goal is to make finance accessible and
          actionable for everyone, regardless of their background or experience.
        </p>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1">
          Here, you&apos;ll find in-depth articles on investing, personal
          finance, and wealth-building strategies. Expect clear explanations,
          practical advice, and a focus on long-term thinking. no fluff — just
          timeless, well-researched ideas.
        </p>
        <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          My Philosophy on Investing &amp; Writing
        </h2>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1">
          Long-term &gt; short-term. Write clearly. Think deeply. Help others.
        </p>
        <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 underline">
          Want weekly insights? Join the readers list →
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Articles by Jay
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((i) => (
            <article
              key={i._id}
              className="border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {i.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {i.description}
              </p>
              <p className="text-sm text-gray-500">        {new Date(i.publishedAt).toDateString()}</p>
              <a
                href={`${(i.categories?.[0]?.slug?.current?.startsWith("/")
                  ? i.categories?.[0]?.slug?.current
                  : `/${i.categories?.[0]?.slug?.current || "general"}`
                )}/${i.slug.current}`}
                className="inline-block mt-3 text-black font-medium hover:underline"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        <p className="italic">
          Disclaimer: The views expressed are for informational purposes only
          and are not investment advice. Always do your own research.
        </p>
      </footer>
    </main>
  );
};

export default AuthorPage;
