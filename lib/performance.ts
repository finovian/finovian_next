// Performance optimization utilities

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Web Vitals tracking
export const trackWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

// Resource loading optimization
export const preloadResource = (href: string, as: string, type?: string, crossOrigin?: string) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  
  if (type) link.type = type;
  if (crossOrigin) link.crossOrigin = crossOrigin;
  
  document.head.appendChild(link);
};

// Prefetch resources
export const prefetchResource = (href: string) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  
  document.head.appendChild(link);
};

// DNS prefetch
export const dnsPrefetch = (hostname: string) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = hostname;
  
  document.head.appendChild(link);
};

// Preconnect to external domains
export const preconnect = (href: string, crossOrigin?: boolean) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  
  if (crossOrigin) link.crossOrigin = 'anonymous';
  
  document.head.appendChild(link);
};

// Image loading optimization
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;
  
  // Use Intersection Observer for lazy loading images
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};

// Critical CSS inlining helper
export const inlineCriticalCSS = (css: string) => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  
  document.head.appendChild(style);
};

// Service Worker registration
export const registerServiceWorker = async (swPath: string = '/sw.js') => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register(swPath);
      if (process.env.NODE_ENV === 'development') {
        console.log('SW registered: ', registration);
      }
      return registration;
    } catch (registrationError) {
      if (process.env.NODE_ENV === 'development') {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }
};

// Bundle size analyzer
export const analyzeBundle = () => {
  if (process.env.NODE_ENV === 'development') {
    // Bundle analyzer would be used in webpack config, not imported dynamically
    if (process.env.NODE_ENV === 'development') {
      console.log('Bundle analyzer would be available in webpack config');
    }
  }
};

// Helper for webpack config (to be used in next.config.ts)
export const getBundleAnalyzerPlugin = () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    return BundleAnalyzerPlugin;
  } catch {
    return null;
  }
};

// Performance marks and measures
export const performanceMark = (name: string) => {
  if (typeof performance !== 'undefined') {
    performance.mark(name);
  }
};

export const performanceMeasure = (name: string, startMark: string, endMark?: string) => {
  if (typeof performance !== 'undefined') {
    if (endMark) {
      performance.measure(name, startMark, endMark);
    } else {
      performance.measure(name, startMark);
    }
  }
};

// Critical resource hints
export const addCriticalResourceHints = () => {
  // Preload critical fonts
  preloadResource('/fonts/Newsreader_9pt-Regular.ttf', 'font', 'font/ttf', 'anonymous');
  
  // Preconnect to external services
  preconnect('https://fonts.googleapis.com');
  preconnect('https://fonts.gstatic.com', true);
  preconnect('https://cdn.sanity.io');
  
  // DNS prefetch for analytics
  dnsPrefetch('https://www.google-analytics.com');
  dnsPrefetch('https://www.googletagmanager.com');
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memInfo = (performance as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    
    if (process.env.NODE_ENV === 'development') {
      console.log({
        usedJSHeapSize: memInfo.usedJSHeapSize,
        totalJSHeapSize: memInfo.totalJSHeapSize,
        jsHeapSizeLimit: memInfo.jsHeapSizeLimit,
      });
    }
};

// Critical path optimization
export const optimizeCriticalPath = () => {
  // Add critical resource hints
  addCriticalResourceHints();
  
  // Optimize image loading
  optimizeImageLoading();
  
  // Register service worker
  registerServiceWorker();
};

