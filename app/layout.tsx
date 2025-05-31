import type React from "react";
import { Providers } from "@/provider/Provider";
import "./globals.css";

import { Inter, Merriweather } from "next/font/google";
import Footer from "@/components/common/Footer";
import FinancialNavbar from "@/components/common/Navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans" aria-label="Finovian blog layout">
        <Providers>
          <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
              {/* <Header /> */}
              <FinancialNavbar />
              <div className="px-0 mt-[55px] flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                  {children}
                </div>
              </div>
              <div className="bg-[#0f0f0f] text-white font-serif py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                  <p className="text-xs uppercase text-gray-400 tracking-wider mb-4">
                    Discover what you’re missing
                  </p>
                  <div className="md:flex md:items-start md:justify-between gap-12">
                    <div className="md:max-w-xl">
                      <h2 className="text-2xl md:text-3xl font-semibold leading-snug md:leading-snug">
                        Get the weekly email full of{" "}
                        <br className="hidden md:block" />
                        actionable ideas and insights{" "}
                        <br className="hidden md:block" />
                        you can use at work and{" "}
                        <br className="hidden md:block" />
                        home.
                      </h2>
                    </div>
                    <form className="mt-6 md:mt-0 md:flex md:items-center gap-3">
                      <input
                        type="email"
                        placeholder="Your best email"
                        className="px-4 py-2.5 text-black rounded-md border-none focus:ring-0 focus:outline-none w-full md:w-[250px]"
                      />
                      <button
                        type="submit"
                        className="bg-[#e50914] hover:bg-[#c40811] transition px-6 py-2.5 rounded-md text-white font-medium"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>

                  <hr className="border-t border-[#2a2a2a] my-10" />

                  <div className="text-sm text-gray-500 mb-4">As seen on:</div>
                  <div className="flex items-center gap-10 flex-wrap">
                    <img src="/nyt.svg" alt="NYT" className="h-6" />
                    <img src="/wsj.svg" alt="WSJ" className="h-6" />
                    <img src="/economist.svg" alt="Economist" className="h-6" />
                    <img src="/ft.svg" alt="Financial Times" className="h-6" />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
