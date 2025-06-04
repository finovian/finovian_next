import type React from "react";
import { Providers } from "@/provider/Provider";
import "./globals.css";

import { Inter, Merriweather } from "next/font/google";
import Footer from "@/components/common/Footer";
import FinancialNavbar from "@/components/common/Navbar";
import NewsLatter from "@/components/common/NewsLatter";
import { getAllCategories } from "@/lib/queries";
import Head from "next/head";

export const metadata = {
  title: "Finovian - Smart US Finance Insights",
  description:
    "Stay updated with the latest finance trends, tax strategies, and budgeting tips for US-based individuals and businesses.",
  keywords: "finance, investing, US tax, budgeting, financial tips, Finovian",
  authors: [{ name: "Finovian" }],
  openGraph: {
    title: "Finovian",
    description: "Smart US Finance Insights",
    url: "https://finovian.com",
    siteName: "Finovian",
    type: "website",
    image: "https://finovian.com/og-image.jpg", // Replace with your OG image URL
  },
  twitter: {
    card: "summary_large_image",
    site: "@finovian", // Replace with your twitter handle if any
    creator: "@finovian",
    title: "Finovian",
    description: "Smart US Finance Insights",
    image: "https://finovian.com/twitter-image.jpg", // Replace with your Twitter image URL
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-merriweather",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getAllCategories();

  const siteUrl = "https://finovian.com";
  const siteName = "Finovian";
  const siteLogo = "https://finovian.com/logo.png"; // Replace with your logo url

  // JSON-LD structured data for Organization + WebSite
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: siteLogo,
        },
        sameAs: [
          "https://www.facebook.com/finovian", // Add your social profiles
          "https://twitter.com/finovian",
          "https://www.linkedin.com/company/finovian",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Finovian" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Canonical Link */}
        <link rel="canonical" href={siteUrl} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body className="font-sans" aria-label="Finovian blog layout">
        <Providers>
          <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
              <FinancialNavbar categories={categories} />
              <main
                className="px-0 mt-[55px] flex flex-1 justify-center py-5"
                role="main"
                tabIndex={-1} // Improve skip navigation/accessibility
              >
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                  {children}
                </div>
              </main>
              <NewsLatter />
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
