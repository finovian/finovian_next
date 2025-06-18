'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsLatter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        setTimeout(() => setStatus('idle'), 2500);
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  if (!hasMounted) return null;

  return (
    <div className="bg-secondary px-6 py-16 font-serif text-secondary-foreground md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="space-y-6 text-center md:space-y-8">
          <h1 className="text-[28px] leading-tight font-bold tracking-tight md:text-4xl md:leading-snug md:font-extrabold text-secondary-foreground">
            Get smarter about investing — in your inbox.
          </h1>
          <p className="mx-auto max-w-[680px] text-sm text-muted-foreground md:text-base">
            Join thousands of investors and receive concise, actionable insights each week.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-[480px] flex-col items-center justify-center gap-4 sm:flex-row"
            aria-live="polite"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              aria-invalid={status === 'error'}
              required
              className="h-12 w-full rounded-md bg-background border border-input px-4 text-sm text-foreground transition placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none sm:h-14 sm:rounded-r-none sm:text-base"
            />

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="h-12 w-full cursor-pointer rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:h-14 sm:w-auto sm:rounded-l-none sm:text-base"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          <AnimatePresence>
            {status === 'error' && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-red-500"
              >
                {errorMsg || 'Something went wrong.'}
              </motion.p>
            )}

            {status === 'success' && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-green-500"
              >
                🎉 Thank you for subscribing!
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <hr className="my-12 border-border" />

        {/* Trusted Logos */}
        <div className="mb-4 text-center text-sm text-muted-foreground">Trusted by readers from:</div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { src: '/NewYorkTimes.svg', alt: 'New York Times' },
            { src: '/WallStreetJournal.svg', alt: 'Wall Street Journal' },
            { src: '/WallStreetJournal.svg', alt: 'The Economist' },
            { src: '/NewYorkTimes.svg', alt: 'Financial Times' },
          ].map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={24}
              className="h-6 opacity-80 transition hover:opacity-100"
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
