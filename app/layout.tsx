import type React from "react";
import { Providers } from "@/provider/Provider";
import "./globals.css";

import { Inter, Merriweather } from "next/font/google";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

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
      <body className="font-sans">

        <Providers>
          <div
            className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
          >
            <div className="layout-container flex h-full grow flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
