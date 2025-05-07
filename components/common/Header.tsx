"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export default function SingularityHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setIsScrollingUp] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const searchRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(searchRef, () => setIsSearchOpen(false));
  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrollingDown = currentScrollY > lastScrollY;
      setIsScrollingUp(!isScrollingDown);

      setIsScrolled(currentScrollY > 10);
      if (currentScrollY < 50) {
        setIsNavVisible(true);
      } else if (isScrollingDown && currentScrollY > 100) {
        setIsNavVisible(true);
      } else if (!isScrollingDown) {
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scrolling when menu or search is open
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isSearchOpen]);

  // Navigation topics
  const topics = [
    { name: "AI", href: "/ai" },
    { name: "Biotechnology", href: "/biotechnology" },
    { name: "Robotics", href: "/robotics" },
    { name: "Computing", href: "/computing" },
    { name: "Future", href: "/future" },
    { name: "Science", href: "/science" },
    { name: "Space", href: "/space" },
    { name: "Energy", href: "/energy" },
    { name: "Tech", href: "/tech" },
  ];

  // Footer links
  const footerLinks = [
    { name: "Topics", href: "/topics" },
    { name: "Pitch Us", href: "/pitch-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "About Hub", href: "/about-hub" },
    { name: "About Singularity", href: "/about-singularity" },
    { name: "Brand Partnerships", href: "/partnerships" },
  ];

  return (
    <>
      {/* Main header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black",
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="border-b border-[#222]">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Hamburger menu */}
            <button
              className="text-white p-2"
              onClick={() => {
                setIsMenuOpen(true);
                setIsSearchOpen(false);
              }}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="text-white text-2xl font-normal flex items-center"
            >
              <span className="font-normal">singularity</span>
              <span className="font-bold">hub</span>
            </Link>

            {/* Search and Subscribe */}
            <div className="flex items-center space-x-4">
              <button
                className="text-white"
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/subscribe"
                className="text-white text-sm tracking-wider font-medium hidden sm:block"
              >
                SUBSCRIBE
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation bar - only visible when not scrolled or scrolling up */}
        <div
          className={cn(
            "bg-black border-b border-[#222] transition-all duration-300",
            isScrolled
              ? "h-0 overflow-hidden opacity-0"
              : "h-auto opacity-100 py-2"
          )}
        >
          <div className="container mx-auto px-4 flex items-center">
            <span className="text-[#5a7d87] text-sm mr-4 font-medium">
              EXPLORE TOPICS:
            </span>
            <nav className="hidden md:flex items-center space-x-6 flex-1 overflow-x-auto py-1 scrollbar-hide">
              {topics.map((topic) => (
                <Link
                  key={topic.name}
                  href={topic.href}
                  className="text-white text-sm hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                >
                  {topic.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center pt-16 md:pt-24">
          <div ref={searchRef} className="w-full max-w-4xl px-4 md:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[#5a7d87] text-lg tracking-wider font-medium">
                SEARCH STORIES
              </h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-white p-2"
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search stories, keywords..."
                className="w-full bg-transparent text-white border border-[#333] rounded-full pl-12 pr-4 py-3 focus:outline-none focus:border-[#555]"
                autoFocus
              />
            </div>

            {/* Recent searches would go here */}
            <div className="text-white opacity-60 text-center mt-12">
              Press Enter to search
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Left sidebar */}
          <div
            ref={menuRef}
            className="w-full md:w-[400px] bg-[#111] h-full overflow-y-auto transition-transform duration-300 ease-in-out transform"
          >
            <div className="flex flex-col h-full">
              {/* Header with logo and close button */}
              <div className="p-4 border-b border-[#222] flex items-center justify-between">
                <Link
                  href="/"
                  className="text-white text-2xl font-normal flex items-center"
                >
                  <span className="font-normal">singularity</span>
                  <span className="font-bold">hub</span>
                </Link>
                <button
                  className="text-white p-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile search input - only visible on mobile */}
              <div className="p-4 md:hidden">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search stories, keywords..."
                    className="w-full bg-[#1a1a1a] text-white border border-[#333] rounded-full pl-12 pr-4 py-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 overflow-y-auto">
                {/* Topics Grid */}
                <div className="grid grid-cols-2 gap-y-6 p-4 border-b border-[#222]">
                  {topics.map((topic) => (
                    <Link
                      key={topic.name}
                      href={topic.href}
                      className="text-white text-xl hover:text-gray-300 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {topic.name}
                    </Link>
                  ))}
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 gap-y-4 p-4 border-b border-[#222]">
                  {footerLinks.slice(0, 3).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  {footerLinks.slice(3).map((link) => (
                    <div key={link.name} className="text-right">
                      <Link
                        href={link.href}
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Singularity Link */}
                <div className="p-4 border-b border-[#222]">
                  <Link
                    href="https://singularity.org"
                    target="_blank"
                    className="text-white flex items-center hover:text-gray-300 transition-colors duration-200"
                  >
                    Singularity
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Social Media Links */}
                <div className="p-4">
                  <p className="text-[#5a7d87] text-xs uppercase tracking-wider mb-3">
                    FOLLOW US ON SOCIAL
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="bg-[#222] p-2 rounded-sm hover:bg-[#333] transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-white" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-[#222] p-2 rounded-sm hover:bg-[#333] transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-[#222] p-2 rounded-sm hover:bg-[#333] transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right overlay - only visible on larger screens */}
          <div
            className="hidden md:block flex-1 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
