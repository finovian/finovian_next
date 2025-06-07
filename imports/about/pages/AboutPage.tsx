import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 md:px-16 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Empowering Smart Investors with Actionable Stock Insights. We simplify
          the complex world of US stock market analysis through data-driven
          tools and expert content.
        </p>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To make stock analysis accessible, reliable, and insightful for
              everyone — from beginners to seasoned traders. We believe smart
              investment decisions begin with smart data.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Why Choose Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unlike generic finance platforms, we focus exclusively on the US
              stock market, blending professional-level analytics with
              simplicity. Save time. Invest smarter.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-black text-center">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Real-time stock data & analytics",
              "In-depth company financials & ratios",
              "Market insights & trending news",
              "Portfolio tracking tools",
              "Technical and fundamental analysis",
              "Investor education & guides",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-black text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Transparency",
                desc: "We stand by data you can trust.",
              },
              {
                title: "Education First",
                desc: "We don’t just give numbers — we explain them.",
              },
              {
                title: "User-Centric Design",
                desc: "Tools built for clarity and ease of use.",
              },
              {
                title: "Independent Analysis",
                desc: "No fluff. No hype. Just facts.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <p className="text-sm text-gray-500 italic max-w-xl mx-auto">
            Disclaimer: Finovian is not a registered investment advisor. All
            content is for educational purposes only. Do your own research
            before making financial decisions.
          </p>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
