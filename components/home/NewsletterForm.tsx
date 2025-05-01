const NewsletterForm = () => {
  return (
    <section
      id="abc"
      className="w-full py-12  flex items-center justify-center"
    >
      <div className="container mx-auto max-w-[920px] text-center">
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
    </section>
  );
};

export default NewsletterForm;
