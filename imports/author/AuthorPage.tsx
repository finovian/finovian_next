import React from 'react';
import Image from 'next/image';

type Post = {
  _id: string;
  title: string;
  publishedAt: string;
  slug: { current: string };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
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
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900 sm:px-8 md:px-20">
      <section className="mx-auto mb-16 max-w-5xl">
        <div className="flex justify-center py-6">
          <Image
            src="/images/author.jpg"
            alt="Author profile"
            width={220}
            height={220}
            className="rounded-full border border-gray-200 object-cover shadow-sm"
          />
        </div>

        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="tracking-light text-[32px] leading-tight font-bold text-[#141414]">
              About Me
            </p>
            <p className="text-sm leading-normal font-normal text-neutral-500">
              Why this blog exists — and who&apos;s behind it.
            </p>
          </div>
        </div>
        <p className="pt-1 pb-3 text-base leading-normal font-normal text-[#141414]">
          I&apos;m Jay, a software engineer and investor with a passion for simplifying complex
          financial concepts. This blog started as a personal project to document my own financial
          journey and share insights with others. My goal is to make finance accessible and
          actionable for everyone, regardless of their background or experience.
        </p>
        <p className="pt-1 pb-3 text-base leading-normal font-normal text-[#141414]">
          Here, you&apos;ll find in-depth articles on investing, personal finance, and
          wealth-building strategies. Expect clear explanations, practical advice, and a focus on
          long-term thinking. no fluff — just timeless, well-researched ideas.
        </p>
        <h2 className="pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em] text-[#141414]">
          My Philosophy on Investing &amp; Writing
        </h2>
        <p className="pt-1 pb-3 text-base leading-normal font-normal text-[#141414]">
          Long-term &gt; short-term. Write clearly. Think deeply. Help others.
        </p>
        <p className="pt-1 pb-3 text-sm leading-normal font-normal text-neutral-500 underline">
          Want weekly insights? Join the readers list →
        </p>
      </section>

      <section className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-2xl font-semibold text-black">Articles by Jay</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((i) => (
            <article
              key={i._id}
              className="rounded-xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{i.title}</h3>
              <p className="mb-3 text-sm text-gray-600">{i.description}</p>
              <p className="text-sm text-gray-500"> {new Date(i.publishedAt).toDateString()}</p>
              <a
                href={`${
                  i.categories?.[0]?.slug?.current?.startsWith('/')
                    ? i.categories?.[0]?.slug?.current
                    : `/${i.categories?.[0]?.slug?.current || 'general'}`
                }/${i.slug.current}`}
                className="mt-3 inline-block font-medium text-black hover:underline"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-20 max-w-4xl text-center text-sm text-gray-500">
        <p className="italic">
          Disclaimer: The views expressed are for informational purposes only and are not investment
          advice. Always do your own research.
        </p>
      </footer>
    </main>
  );
};

export default AuthorPage;
