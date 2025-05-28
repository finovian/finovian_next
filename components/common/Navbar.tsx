"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import clsx from "clsx";

const navLinks = ["Home", "Stocks", "Strategy", "Macro", "About"];

export default function FinancialNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#0a2540] tracking-wide">
          FinScope
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/category/${link.toLowerCase()}`}
              className="text-[#1a202c] hover:text-[#0a2540] font-medium transition"
            >
              {link}
            </Link>
          ))}

          {/* <div className="relative flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle Search"
              className="text-[#0a2540]"
            >
              <Search size={22} />
            </button>
            {searchOpen && (
              <input
                type="text"
                placeholder="Search insights..."
                className="border-b border-gray-300 focus:border-[#0a2540] outline-none px-2 py-1 text-sm text-[#1a202c] transition-all"
              />
            )}
          </div> */}
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search className="text-[#0a2540]" size={24} />
          </button> */}
          <Hamburger isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {/* Mobile Search Box */}
      {/* <div
        className={clsx(
          "lg:hidden px-6 transition-all duration-300 overflow-hidden",
          searchOpen
            ? "max-h-28 py-3 border-t border-gray-100 bg-white"
            : "max-h-0"
        )}
      >
        <input
          type="text"
          placeholder="Search insights..."
          autoFocus
          className="w-full border-b border-gray-300 focus:border-[#0a2540] outline-none px-2 py-2 text-base"
        />
      </div> */}

      {/* Mobile Navigation */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 bg-white",
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/category/${link.toLowerCase()}`}
              className="text-[#1a202c] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hamburger({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Menu"
      className="flex flex-col justify-between w-6 h-5 group"
    >
      <span
        className={clsx(
          "h-0.5 bg-[#0a2540] rounded transition-all duration-300",
          isOpen ? "rotate-45 translate-y-2" : ""
        )}
      />
      <span
        className={clsx(
          "h-0.5 bg-[#0a2540] rounded transition-opacity duration-300",
          isOpen ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={clsx(
          "h-0.5 bg-[#0a2540] rounded transition-all duration-300",
          isOpen ? "-rotate-45 -translate-y-2" : ""
        )}
      />
    </button>
  );
}
