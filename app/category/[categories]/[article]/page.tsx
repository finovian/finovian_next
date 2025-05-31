"use client";

import React from "react";
import {
  Twitter,
  Instagram,
  Linkedin,
  Share2,
  MessageCircle,
  Heart,
} from "lucide-react";

const Page = () => {
  return (
    <div className="bg-white text-[#141414]">
      {/* Header Image */}
      <div
        className="w-full h-[300px] bg-cover bg-center rounded-b-xl"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/random/1200x600?finance")',
        }}
      />

      {/* Content Wrapper */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Market Cycles & Emotional Discipline: A Deep Dive into Investment
          Psychology
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-neutral-700 italic">
          Discover how understanding your emotional patterns and biases can
          unlock stronger returns over decades, not just years.
        </p>

        {/* Author Info */}
        <p className="text-sm text-neutral-500">
          By <strong>Jane Carter</strong> · May 30, 2025 · 14 min read
        </p>

        {/* Social Share Icons */}
        <div className="flex gap-3 pt-2">
          <button
            className="bg-neutral-100 hover:bg-neutral-200 rounded-full p-2"
            title="Share on Twitter"
          >
            <Twitter className="w-4 h-4 text-black" />
          </button>
          <button
            className="bg-neutral-100 hover:bg-neutral-200 rounded-full p-2"
            title="Share on Instagram"
          >
            <Instagram className="w-4 h-4 text-black" />
          </button>
          <button
            className="bg-neutral-100 hover:bg-neutral-200 rounded-full p-2"
            title="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-black" />
          </button>
          <button
            className="bg-neutral-100 hover:bg-neutral-200 rounded-full p-2"
            title="Copy Link"
          >
            <Share2 className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-base leading-loose text-neutral-800">
          <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-600">
            "In investing, what is comfortable is rarely profitable."
          </blockquote>

          <p>
            Investing is often presented as a purely logical process, one based
            on formulas, technical indicators, and ratios. But at its core,
            investing is a <strong>deeply emotional experience</strong>. It
            involves fear, hope, greed, and doubt.
          </p>

          <img
            src="https://source.unsplash.com/random/800x400?chart"
            alt="Chart"
            className="w-full rounded-lg shadow-md"
          />

          <p>
            Consider this: during a bull market,{" "}
            <em>optimism and overconfidence</em> creep in. People begin to
            believe that markets only move up. In contrast, during market
            crashes, panic takes over. This cycle repeats every few years.
          </p>

          <img
            src="https://source.unsplash.com/random/800x400?stock"
            alt="Stock Chart"
            className="w-full rounded-lg shadow-md"
          />

          <p>
            One of the most dangerous biases is the{" "}
            <strong>recency bias</strong> — assuming that the recent trend will
            continue indefinitely.
          </p>

          <p>
            Another psychological trap is <strong>loss aversion</strong>.
            Studies show that the pain of losing $1,000 is twice as powerful as
            the joy of gaining the same amount.
          </p>

          <h2 className="text-2xl font-semibold pt-6">
            Why Long-Term Thinking Wins
          </h2>
          <p>
            Markets reward those who remain consistent. Long-term investors
            understand that short-term volatility is <em>just noise</em>.
          </p>

          <p>
            For example, someone who invested $10,000 in an S&P 500 index fund
            in 1990 and didn’t touch it — not even during the Dot-com crash, the
            2008 financial crisis, or COVID — would have seen their portfolio
            grow significantly.
          </p>

          <h2 className="text-2xl font-semibold pt-6">Key Takeaways</h2>
          <ul className="list-disc list-inside text-neutral-700 space-y-2">
            <li>
              <strong>Stick to a plan</strong> — even during downturns.
            </li>
            <li>
              <strong>Recognize emotional triggers</strong> and prepare.
            </li>
            <li>
              Stop checking your portfolio <em>daily</em>.
            </li>
            <li>Stay diversified, avoid hype.</li>
            <li>
              Review goals <strong>annually</strong>.
            </li>
          </ul>

          <div className="border p-4 rounded-md bg-neutral-50">
            <p className="italic">Tweeted by @marketpro:</p>
            <p className="mt-2">
              "Most people miss big gains not because they chose the wrong
              stocks, but because they sold too soon. Emotions are the true cost
              of investing."
            </p>
          </div>

          {/* Simulated Comments */}
          <div className="pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <img
                src="https://i.pravatar.cc/40"
                className="w-10 h-10 rounded-full"
                alt="Avatar"
              />
              <div>
                <p className="font-semibold">Alex M.</p>
                <p className="text-sm text-neutral-700">
                  Really insightful! Emotional investing is underrated as a
                  skill.
                </p>
                <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
                  <Heart className="w-4 h-4" /> <span>12</span>
                  <MessageCircle className="w-4 h-4 ml-4" /> <span>Reply</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold pt-6">Sources & References</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600">
            <li>
              <a
                href="https://www.investopedia.com/articles/markets/082619/how-investors-can-avoid-emotional-trading.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Investopedia: Emotional Trading
              </a>
            </li>
            <li>
              <a
                href="https://www.fool.com/investing/how-to-invest/behavioral-finance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Motley Fool: Behavioral Finance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
