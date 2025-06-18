'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ThemeWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function ThemeWrapper({ children, className = '' }: ThemeWrapperProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a neutral wrapper during hydration
    return (
      <div className={`bg-background text-foreground transition-colors duration-300 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div 
      className={`bg-background text-foreground transition-colors duration-300 ${className}`}
      data-theme={resolvedTheme}
    >
      {children}
    </div>
  );
}

