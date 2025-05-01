import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExploreCategories = () => {
  return (
    <section
      id="explore"
      className="w-full h-auto py-12 flex items-center justify-center"
    >
      <div className="container mx-auto max-w-[920px] text-center ">
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
  );
};

export default ExploreCategories;
