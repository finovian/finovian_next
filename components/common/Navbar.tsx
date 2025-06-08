'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Search, X } from 'lucide-react';

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
  const [query, setQuery] = useState('');
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    setSearchOpen(false);
    if (!query.trim()) return;
    // Handle search query

    setQuery('');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
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
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [loginOpen, searchOpen]);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href.startsWith('/') ? href : `/${href}`}
      className="text-sm font-medium tracking-wide text-[#1a202c] transition-all duration-200 hover:text-[#0a2540]"
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wide text-[#0a2540]">
              Finovian
            </Link>
          </div>

          {/* Right: Navigation */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div
              className={clsx(
                'hidden items-center gap-6 transition-all duration-300 lg:flex',
                searchOpen ? 'translate-x-[-180px]' : 'translate-x-0'
              )}
            >
              <NavLink href="/" label="Home" />
              {categories.map((cat) => (
                <NavLink key={cat._id} href={cat.slug.current} label={cat.title} />
              ))}
              <NavLink href="/about" label="About" />
              <button
                onClick={() => setLoginOpen(true)}
                className="rounded-lg bg-gradient-to-r from-[#0a2540] to-[#1a1f36] px-4 py-2 text-sm font-semibold text-white shadow transition hover:opacity-90"
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
                  className="p-2 text-[#0a2540] transition hover:text-black"
                >
                  <Search className="h-5 w-5" />
                </button>
                <div
                  className={clsx(
                    'absolute top-1/2 right-0 z-50 flex -translate-y-1/2 items-center gap-2 overflow-hidden rounded-md border border-gray-300 bg-gray-100 transition-all duration-300',
                    searchOpen
                      ? 'w-72 px-2 py-1 opacity-100'
                      : 'pointer-events-none w-0 px-0 py-0 opacity-0'
                  )}
                >
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="flex-1 bg-transparent px-2 py-1 text-sm text-gray-800 focus:outline-none"
                    placeholder="Search..."
                  />
                  <button
                    onClick={handleSearch}
                    className="px-2 text-sm font-medium text-[#2e376687] transition hover:text-[#0a2540]"
                  >
                    Go
                  </button>
                </div>
              </div>

              {/* Mobile Toggle */}
              <div className="flex items-center gap-3 lg:hidden">
                <button
                  type="button"
                  onClick={() => setSearchOpen((prev) => !prev)}
                  className="p-2 text-[#0a2540] transition hover:text-black"
                >
                  <Search className="h-5 w-5" />
                </button>
                <Hamburger isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="px-6 pb-4 lg:hidden">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Search..."
              />
              <button
                onClick={handleSearch}
                className="rounded-md bg-black px-4 py-2 text-sm text-white transition hover:bg-[#0a2540]"
              >
                Go
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden',
            menuOpen ? 'max-h-screen py-4' : 'max-h-0'
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
              className="rounded-lg bg-gradient-to-r from-[#0a2540] to-[#1a1f36] px-4 py-2 text-sm font-semibold text-white shadow transition hover:opacity-90"
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* Subscribe Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="animate-fade-in-up relative mx-4 w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
          >
            <button
              className="absolute top-3 right-3 text-gray-400 transition hover:text-gray-600"
              onClick={() => {
                setLoginOpen(false);
                setStatus('idle');
                setEmail('');
                setErrorMsg('');
              }}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="mb-4 text-xl font-semibold text-[#0a2540]">Subscribe</h2>

            <input
              type="email"
              placeholder="Email address"
              className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm transition focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
            />

            {status === 'error' && (
              <p className="mb-2 text-sm text-red-600">{errorMsg || 'Something went wrong'}</p>
            )}

            {status === 'success' && (
              <p className="mb-2 text-sm text-green-600">Thank you for subscribing!</p>
            )}

            <button
              className={`w-full rounded-md py-2 text-sm font-medium transition ${status === 'loading'
                ? 'cursor-not-allowed bg-gray-400 text-gray-700'
                : 'bg-black text-white hover:bg-[#0a2540]'
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

function Hamburger({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Menu"
      className="group flex h-5 w-6 flex-col justify-between"
    >
      <span
        className={clsx(
          'h-0.5 rounded bg-[#0a2540] transition-all duration-300',
          isOpen ? 'translate-y-2 rotate-45' : ''
        )}
      />
      <span
        className={clsx(
          'h-0.5 rounded bg-[#0a2540] transition-opacity duration-300',
          isOpen ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={clsx(
          'h-0.5 rounded bg-[#0a2540] transition-all duration-300',
          isOpen ? '-translate-y-2 -rotate-45' : ''
        )}
      />
    </button>
  );
}
