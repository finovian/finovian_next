// Google Analytics 4
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Google Tag Manager
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// GA4 Event tracking
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Page view tracking
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID || '', {
      page_title: title,
      page_location: url,
    });
  }
};

// Performance tracking
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    // Core Web Vitals
    import('web-vitals')
      .then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS((metric: { value: number }) =>
          trackEvent({
            action: 'CLS',
            category: 'Performance',
            value: Math.round(metric.value * 1000),
          })
        );
        onINP((metric: { value: number }) =>
          trackEvent({ action: 'INP', category: 'Performance', value: Math.round(metric.value) })
        );
        onFCP((metric: { value: number }) =>
          trackEvent({ action: 'FCP', category: 'Performance', value: Math.round(metric.value) })
        );
        onLCP((metric: { value: number }) =>
          trackEvent({ action: 'LCP', category: 'Performance', value: Math.round(metric.value) })
        );
        onTTFB((metric: { value: number }) =>
          trackEvent({ action: 'TTFB', category: 'Performance', value: Math.round(metric.value) })
        );
      })
      .catch(() => {
        // web-vitals not available
      });

    // Custom performance metrics
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    trackEvent({ action: 'Load Time', category: 'Performance', value: Math.round(loadTime) });
  }
};

// Scroll depth tracking
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const thresholds = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          trackEvent({
            action: 'Scroll Depth',
            category: 'Engagement',
            label: `${threshold}%`,
            value: threshold,
          });
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};

// Reading time tracking
export const trackReadingTime = (articleId: string) => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  let isVisible = true;

  const handleVisibilityChange = () => {
    isVisible = !document.hidden;
  };

  const trackTime = () => {
    if (isVisible) {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent({
        action: 'Reading Time',
        category: 'Engagement',
        label: articleId,
        value: timeSpent,
      });
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('beforeunload', trackTime);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('beforeunload', trackTime);
  };
};
