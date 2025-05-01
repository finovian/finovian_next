import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-[920px] flex justify-items-center items-center flex-col text-center ">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Think better. Decide better. Live better.
        </h1>
        <p className="text-gray-700 mb-4 text-base leading-relaxed max-w-2xl">
          Our timeless insights for a complex Tuesday. Sunday understanding by
          300,000+ independent thinkers.
        </p>
        <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-2xl">
          <span className="font-semibold">Bonus: </span>
          Prescribed Chapter 1 of our recent New York Times best- selling book,
          clear thinking: turning ordinary approaches into extraordinary
          results.
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
  );
};

export default HeroSection;
