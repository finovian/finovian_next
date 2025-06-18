import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground md:px-16 transition-colors duration-300">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-foreground md:text-5xl">About Us</h1>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground md:text-xl">
          Empowering Smart Investors with Actionable Stock Insights. We simplify the complex world
          of US stock market analysis through data-driven tools and expert content.
        </p>

        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Our Mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              To make stock analysis accessible, reliable, and insightful for everyone — from
              beginners to seasoned traders. We believe smart investment decisions begin with smart
              data.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Why Choose Us</h2>
            <p className="leading-relaxed text-muted-foreground">
              Unlike generic finance platforms, we focus exclusively on the US stock market,
              blending professional-level analytics with simplicity. Save time. Invest smarter.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-center text-2xl font-semibold text-foreground">What We Offer</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Real-time stock data & analytics',
              'In-depth company financials & ratios',
              'Market insights & trending news',
              'Portfolio tracking tools',
              'Technical and fundamental analysis',
              'Investor education & guides',
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-4 shadow-sm transition hover:shadow-md"
              >
                <p className="font-medium text-card-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-center text-2xl font-semibold text-foreground">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Transparency',
                desc: 'We stand by data you can trust.',
              },
              {
                title: 'Education First',
                desc: 'We don’t just give numbers — we explain them.',
              },
              {
                title: 'User-Centric Design',
                desc: 'Tools built for clarity and ease of use.',
              },
              {
                title: 'Independent Analysis',
                desc: 'No fluff. No hype. Just facts.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <p className="mx-auto max-w-xl text-sm text-muted-foreground italic">
            Disclaimer: Finovian is not a registered investment advisor. All content is for
            educational purposes only. Do your own research before making financial decisions.
          </p>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
