"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

type Category = {
  _id: string;
  title: string;
  slug: { current: string };
};

type Props = {
  categories: Category[];
};

export default function FinancialNavbar({ categories }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="text-[#1a202c] hover:text-[#0a2540] font-medium transition"
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#0a2540] tracking-wide">
          <Link href="/">Finovian</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink href="/" label="Home" />
          {categories.map((cat) => (
            <NavLink
              key={cat._id}
              href={`/category/${cat.slug.current}`}
              label={cat.title}
            />
          ))}
          <NavLink href="/about" label="About" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <Hamburger isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 bg-white",
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          <NavLink href="/" label="Home" />
          {categories.map((cat) => (
            <NavLink
              key={cat._id}
              href={`/category/${cat.slug.current}`}
              label={cat.title}
            />
          ))}
          <NavLink href="/about" label="About" />
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
