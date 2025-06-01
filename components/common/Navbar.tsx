"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const navLinks = ["Stocks", "Strategy", "Macro",];

export default function FinancialNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#0a2540] tracking-wide">
          <Link href="/">
            Finovian
          </Link>
        </div>


        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-[#1a202c] hover:text-[#0a2540] font-medium transition">
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/category/${link.toLowerCase()}`}
              className="text-[#1a202c] hover:text-[#0a2540] font-medium transition"
            >
              {link}
            </Link>
          ))}
          <Link href="/about" className="text-[#1a202c] hover:text-[#0a2540] font-medium transition">
            About
          </Link>

        </div>

        <div className="flex lg:hidden items-center space-x-4">

          <Hamburger isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>


      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 bg-white",
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-[#1a202c] font-medium">Home</Link>
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
          <Link href="/about" className="text-[#1a202c] font-medium">About</Link>
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
