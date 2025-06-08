import Image from 'next/image';
import React from 'react';

const NewsLatter = () => {
  return (
    <div className="bg-[#0e1111] px-6 py-16 font-serif text-white md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[960px]">
        {/* CTA Section */}
        <div className="space-y-6 text-center md:space-y-8">
          <h1 className="text-[28px] leading-tight font-bold tracking-tight md:text-4xl md:leading-snug md:font-extrabold">
            Get smarter about investing — in your inbox.
          </h1>
          <p className="mx-auto max-w-[680px] text-sm text-gray-400 md:text-base">
            Join thousands of investors and receive concise, actionable insights each week.
          </p>
          <form className="mx-auto flex max-w-[480px] flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-md bg-[#f2f2f3] px-4 text-sm text-black transition placeholder:text-[#737578] focus:ring-2 focus:ring-white focus:outline-none sm:h-14 sm:rounded-r-none sm:text-base"
              required
            />
            <button
              type="submit"
              className="h-12 w-full rounded-md bg-[#e81a1a] px-6 text-sm font-semibold text-white transition hover:bg-[#d61616] sm:h-14 sm:w-auto sm:rounded-l-none sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <hr className="my-12 border-[#2a2a2a]" />

        {/* Trusted Logos */}
        <div className="mb-4 text-center text-sm text-gray-400">Trusted by readers from:</div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Image
            src="/NewYorkTimes.svg"
            alt="New York Times"
            width={100}
            height={24}
            className="h-6 opacity-80 transition hover:opacity-100"
          />
          <Image
            src="/WallStreetJournal.svg"
            alt="Wall Street Journal"
            width={100}
            height={24}
            className="h-6 opacity-80 transition hover:opacity-100"
          />
          <Image
            src="/NewYorkTimes.svg"
            alt="The Economist"
            width={100}
            height={24}
            className="h-6 opacity-80 transition hover:opacity-100"
          />
          <Image
            src="/NewYorkTimes.svg"
            alt="Financial Times"
            width={100}
            height={24}
            className="h-6 opacity-80 transition hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
