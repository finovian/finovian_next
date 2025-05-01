import type React from "react";
import { Providers } from "@/provider/Provider";

import Header from "@/imports/Header";
import HeroSection from "@/imports/HeroSection";
import ExploreSection from "@/imports/ExploreSection";
import ABCSection from "@/imports/ABCSection";
import Footer from "@/imports/Footer";

import "./globals.css";

import { Inter, Merriweather } from "next/font/google";



const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-merriweather",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <HeroSection />
              <ExploreSection />
              <ABCSection />
              {children}
            </main>
            <Footer />
          </div>

        </Providers>
      </body>
    </html>
  )
}
