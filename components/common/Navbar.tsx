"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Search, X } from "lucide-react";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');


  const modalRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    setSearchOpen(false);
    if (!query.trim()) return;
    // Handle search query
    if (process.env.NODE_ENV === 'development') {
      console.log("Search query:", query);
    }
    setQuery("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setLoginOpen(false);
      setSearchOpen(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setLoginOpen(false);
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    if (loginOpen || searchOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginOpen, searchOpen]);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href.startsWith("/") ? href : `/${href}`}
      className="text-[#1a202c] hover:text-[#0a2540] font-medium text-sm tracking-wide transition-all duration-200"
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-[#0a2540] tracking-wide"
            >
              Finovian
            </Link>
          </div>

          {/* Right: Navigation */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div
              className={clsx(
                "hidden lg:flex items-center gap-6 transition-all duration-300",
                searchOpen ? "translate-x-[-180px]" : "translate-x-0"
              )}
            >
              <NavLink href="/" label="Home" />
              {categories.map((cat) => (
                <NavLink key={cat._id} href={cat.slug.current} label={cat.title} />
              ))}
              <NavLink href="/about" label="About" />
              <button
                onClick={() => setLoginOpen(true)}
                className="bg-gradient-to-r from-[#0a2540] to-[#1a1f36] text-white font-semibold text-sm px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </div>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-3 lg:gap-4">
              <div ref={modalRef} className="relative hidden lg:block">
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-[#0a2540] hover:text-black transition"
                >
                  <Search className="w-5 h-5" />
                </button>
                <div
                  className={clsx(
                    "absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md overflow-hidden transition-all duration-300 z-50",
                    searchOpen
                      ? "opacity-100 w-72 px-2 py-1"
                      : "opacity-0 w-0 px-0 py-0 pointer-events-none"
                  )}
                >
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="flex-1 bg-transparent text-sm text-gray-800 focus:outline-none px-2 py-1"
                    placeholder="Search..."
                  />
                  <button
                    onClick={handleSearch}
                    className="text-sm text-[#2e376687] hover:text-[#0a2540] transition font-medium px-2"
                  >
                    Go
                  </button>
                </div>
              </div>

              {/* Mobile Toggle */}
              <div className="flex lg:hidden items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSearchOpen((prev) => !prev)}
                  className="p-2 text-[#0a2540] hover:text-black transition"
                >
                  <Search className="w-5 h-5" />
                </button>
                <Hamburger
                  isOpen={menuOpen}
                  toggle={() => setMenuOpen(!menuOpen)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden px-6 pb-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Search..."
              />
              <button
                onClick={handleSearch}
                className="text-sm px-4 py-2 bg-black text-white rounded-md hover:bg-[#0a2540] transition"
              >
                Go
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 bg-white",
            menuOpen ? "max-h-screen py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col items-center space-y-4">
            <NavLink href="/" label="Home" />
            {categories.map((cat) => (
              <NavLink key={cat._id} href={cat.slug.current} label={cat.title} />
            ))}
            <NavLink href="/about" label="About" />
            <button
              onClick={() => {
                setLoginOpen(true);
                setMenuOpen(false);
              }}
              className="bg-gradient-to-r from-[#0a2540] to-[#1a1f36] text-white font-semibold text-sm px-4 py-2 rounded-lg shadow hover:opacity-90 transition"

            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>


      {/* Subscribe Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-xl max-w-sm w-full mx-4 p-6 relative animate-fade-in-up"
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
              onClick={() => {
                setLoginOpen(false);
                setStatus('idle');
                setEmail('');
                setErrorMsg('');
              }}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold text-[#0a2540] mb-4">Subscribe</h2>

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition text-sm mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
            />

            {status === 'error' && (
              <p className="text-red-600 text-sm mb-2">{errorMsg || 'Something went wrong'}</p>
            )}

            {status === 'success' && (
              <p className="text-green-600 text-sm mb-2">Thank you for subscribing!</p>
            )}

            <button
              className={`w-full py-2 rounded-md transition font-medium text-sm ${status === 'loading'
                ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                : 'bg-black hover:bg-[#0a2540] text-white'
                }`}
              onClick={async () => {
                if (!email || !email.includes('@')) {
                  setStatus('error');
                  setErrorMsg('Please enter a valid email address');
                  return;
                }
                setStatus('loading');
                setErrorMsg('');

                try {
                  const res = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                  });

                  const data = await res.json();

                  if (!res.ok) {
                    setStatus('error');
                    setErrorMsg(data.error || 'Subscription failed');
                  } else {
                    setStatus('success');
                    setEmail('');
                    // Optional: auto-close modal after success
                    setTimeout(() => {
                      setLoginOpen(false);
                      setStatus('idle');
                    }, 2000);
                  }
                } catch (_err) {
                  setStatus('error');
                  setErrorMsg('Network error. Please try again.');
                }
              }}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? 'Submitting...' : 'Continue'}
            </button>
          </div>
        </div>
      )}

    </>
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
