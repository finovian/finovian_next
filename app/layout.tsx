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
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
