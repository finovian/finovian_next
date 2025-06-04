import Image from "next/image";
import React from "react";

const NewsLatter = () => {
  return (
    <div className="bg-[#0e1111] text-white font-serif px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[960px] w-full">
        {/* CTA Section */}
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-[28px] leading-tight font-bold tracking-tight md:text-4xl md:leading-snug md:font-extrabold">
            Get smarter about investing — in your inbox.
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-[680px] mx-auto">
            Join thousands of investors and receive concise, actionable insights
            each week.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-[480px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 sm:h-14 px-4 rounded-md sm:rounded-r-none bg-[#f2f2f3] text-black placeholder:text-[#737578] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white transition"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto h-12 sm:h-14 px-6 bg-[#e81a1a] hover:bg-[#d61616] text-white font-semibold text-sm sm:text-base rounded-md sm:rounded-l-none transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <hr className="my-12 border-[#2a2a2a]" />

        {/* Trusted Logos */}
        <div className="text-center mb-4 text-sm text-gray-400">
          Trusted by readers from:
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <Image
            src="/NewYorkTimes.svg"
            alt="New York Times"
            width={100}
            height={24}
            className="h-6 opacity-80 hover:opacity-100 transition"
          />
          <Image
            src="/WallStreetJournal.svg"
            alt="Wall Street Journal"
            width={100}
            height={24}
            className="h-6 opacity-80 hover:opacity-100 transition"
          />
          <Image
            src="/NewYorkTimes.svg"
            alt="The Economist"
            width={100}
            height={24}
            className="h-6 opacity-80 hover:opacity-100 transition"
          />
          <Image
            src="/NewYorkTimes.svg"
            alt="Financial Times"
            width={100}
            height={24}
            className="h-6 opacity-80 hover:opacity-100 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
