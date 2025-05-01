import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";

export function Starter() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-red-600 font-serif font-bold text-3xl"
            >
              fs
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Newsletter
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Books
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Podcast
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Articles
            </Link>
            <button
              aria-label="Search"
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              href="#"
              className="text-sm font-medium text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Become a Member
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 md:py-14 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Think better. Decide better. Live better.
            </h1>
            <p className="text-gray-700 mb-4 text-base leading-relaxed max-w-2xl">
              Our timeless insights for a complex Tuesday. Sunday understanding
              by 300,000+ independent thinkers.
            </p>
            <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-2xl">
              <span className="font-semibold">Bonus: </span>
              Prescribed Chapter 1 of our recent New York Times best- selling
              book, clear thinking: turning ordinary approaches into
              extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded flex-grow max-w-md"
                aria-label="Email Address"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded whitespace-nowrap hover:bg-red-700 transition-colors">
                Start Your Brain Food
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm pt-2 border-t border-gray-200">
              <Image
                src="/placeholder.svg?height=20&width=120"
                alt="The New York Times"
                width={120}
                height={20}
                className="grayscale opacity-70"
              />
              <Image
                src="/placeholder.svg?height=20&width=60"
                alt="WSJ"
                width={60}
                height={20}
                className="grayscale opacity-70"
              />
              <Image
                src="/placeholder.svg?height=20&width=100"
                alt="Economist"
                width={100}
                height={20}
                className="grayscale opacity-70"
              />
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-12 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 pr-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-4">
                  Explore Farnam Street Articles
                </h2>
                <p className="text-sm text-gray-600 mb-8">
                  New to the Farnam Street?{" "}
                  <Link href="#" className="text-red-600 underline">
                    Start here
                  </Link>{" "}
                  →
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mental Models</h3>
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                      How to use mental models to make better decisions and
                      avoid cognitive biases.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reading Better</h3>
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                      Improve critical comprehension and recall, and read with
                      purpose.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Decision Making</h3>
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                      Learn how to make better decisions in life and at work.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Podcast</h3>
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                      Join me for in-depth conversations with remarkable people.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="bg-gray-50 p-6 rounded">
                  <h3 className="text-xl font-bold mb-2">
                    Accelerated Learning
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Learn faster and master complex topics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Project Section */}
        <section className="py-12 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 p-6 rounded text-white">
                  <div className="mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=200"
                      alt="Knowledge Project"
                      width={200}
                      height={60}
                      className="brightness-200"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    "The highest form of wisdom is good judgment."
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed">
                    Conversations with the world's top performers to extract the
                    tactics, tools, and routines you can use.
                  </p>
                  <div className="flex items-center text-xs">
                    <span className="bg-red-500 p-1 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    Apple Podcasts
                  </div>
                  <div className="text-xs mt-2">Spotify • Others</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-base font-bold mb-4">
                  Recent podcast episodes:
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold mb-1 text-base">
                      Corey Tun-Billson: Dollar Muffin — Inside Y Combinator's
                      Startup Formula
                    </h4>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-base">
                      Outliers: Henry Singleton — Cultural Force
                    </h4>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-base">
                      Brad Taylor: A Vision For Art's Next Frontier
                    </h4>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-base">
                      Pierre Poilievre: What I Want to Build (and Break) to Fix
                      Canada
                    </h4>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-base">
                      Outliers: Cornelius Vanderbilt—The First Tycoon
                    </h4>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="#"
                    className="text-red-600 text-sm inline-flex items-center"
                  >
                    See all episodes <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-16 leading-tight">
              Timeless Wisdom That
              <br />
              Helps You Succeed in Life
              <br />
              and Work.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Clear Thinking Book"
                  width={200}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                  Clear Thinking: Turning Ordinary
                  <br />
                  Moments into Extraordinary
                  <br />
                  Results
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A proven framework for thinking clearly, no matter the
                  situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
                    Order Now
                  </button>
                  <Link
                    href="#"
                    className="text-red-600 underline flex items-center"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Think better. Make smarter
              <br />
              progress in your life and career.
              <br />
              Find your focus.
            </h2>
            <button className="bg-red-600 text-white px-6 py-2 rounded mt-4 hover:bg-red-700 transition-colors">
              Become a Member (Great Decision)
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-8 border-t border-gray-800">
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">FS Brain Food Newsletter</h3>
                <p className="text-sm text-gray-400">
                  Our free weekly newsletter with timeless insights.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Early Access to New Content</h3>
                <p className="text-sm text-gray-400">
                  Get early access to new articles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Trusted Source</h3>
                <p className="text-sm text-gray-400">
                  Support our ad-free, paywall-free site.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Learn Faster!</h3>
                <p className="text-sm text-gray-400">
                  Learn the mental models used by the world's top performers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-bold">Sunday Brain Food newsletter</h3>
                <p className="text-sm text-gray-400">
                  Upgrade your mind in just 5 minutes a week.
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Your best email"
                  className="px-4 py-2 border border-gray-700 bg-gray-900 rounded-l flex-grow"
                  aria-label="Your best email"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-r hover:bg-red-700 transition-colors">
                  Try it
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-xs text-gray-500">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link
                  href="/"
                  className="text-red-600 font-serif font-bold text-lg"
                >
                  fs
                </Link>
                <span className="ml-2">
                  © Farnam Street Media Inc. All Rights Reserved.
                </span>
              </div>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white">
                  About
                </Link>
                <Link href="#" className="hover:text-white">
                  Membership
                </Link>
                <Link href="#" className="hover:text-white">
                  Support
                </Link>
                <Link href="#" className="hover:text-white">
                  Newsletter
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-4 gap-4">
              <Link href="#" className="hover:text-white" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
