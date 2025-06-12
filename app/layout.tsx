import type React from 'react';
import { Providers } from '@/provider/Provider';
import './globals.css';
import { Inter, Merriweather } from 'next/font/google';
import Footer from '@/components/common/Footer';
import FinancialNavbar from '@/components/common/Navbar';
import NewsLatter from '@/components/common/NewsLatter';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { getAllCategories } from '@/lib/queries';
import { generateMetadata, generateWebsiteSchema, generateOrganizationSchema } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Expert Financial Insights & Investment Analysis',
  description:
    'Stay ahead with comprehensive market analysis, stock insights, and AI-driven financial content. Expert investment strategies and financial planning advice.',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false, // Disable if causing issues
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-merriweather',
  preload: false,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false, // Disable if causing issues
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getAllCategories();

  // JSON-LD structured data for the website
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [generateOrganizationSchema(), generateWebsiteSchema()],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <head>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>

      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-blue-600 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>

        <ErrorBoundary>
          <Providers>
            <div className="group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white">
              <div className="layout-container flex h-full grow flex-col">
                <FinancialNavbar categories={categories} />

                <main
                  id="main-content"
                  className="mt-[55px] flex flex-1 justify-center px-0 py-5"
                  role="main"
                >
                  <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
                    {children}
                  </div>
                </main>

                <NewsLatter />
                <Footer />
              </div>
            </div>
          </Providers>
        </ErrorBoundary>

        {/* Analytics will be loaded conditionally in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                        page_title: document.title,
                        page_location: window.location.href,
                      });
                    `,
                  }}
                />
              </>
            )}
          </>
        )}
      </body>
    </html>
  );
}
