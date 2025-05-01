import Link from "next/link";

// ABCSection.tsx
const FeaturedArticles = () => {
  return (
    <section id="abc" className="w-full py-12 flex items-center justify-center">
      <div className="container mx-auto max-w-[920px] text-center">
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
                  How to use mental models to make better decisions and avoid
                  cognitive biases.
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
              <h3 className="text-xl font-bold mb-2">Accelerated Learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn faster and master complex topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
