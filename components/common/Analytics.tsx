'use client';

import { useEffect } from 'react';
import { trackWebVitals } from '@/lib/performance';

// Google Analytics component
export function GoogleAnalytics() {
  useEffect(() => {
    // Track web vitals
    trackWebVitals((metric) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
        fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...metric,
            url: window.location.href,
            timestamp: Date.now(),
          }),
        }).catch((error) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('Failed to send analytics:', error);
          }
        });
      }
    });
  }, []);

  return null;
}

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Newsletter signup tracking
export const trackNewsletterSignup = (email: string) => {
  trackEvent('newsletter_signup', {
    event_category: 'engagement',
    event_label: 'newsletter',
    custom_parameters: {
      email_domain: email.split('@')[1],
    },
  });
};

// Article interaction tracking
export const trackArticleInteraction = (action: string, articleId: string, category?: string) => {
  trackEvent('article_interaction', {
    event_category: 'content',
    event_label: action,
    custom_parameters: {
      article_id: articleId,
      article_category: category,
    },
  });
};

// Search tracking
export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: query,
    event_category: 'search',
    custom_parameters: {
      results_count: resultsCount,
    },
  });
};

// Error tracking
export const trackError = (error: Error, errorInfo?: unknown) => {
  trackEvent('exception', {
    description: error.message,
    fatal: false,
    custom_parameters: {
      stack: error.stack,
      error_info: errorInfo,
    },
  });
};

// Performance tracking
export const trackPerformance = (metricName: string, value: number, unit?: string) => {
  trackEvent('performance_metric', {
    event_category: 'performance',
    event_label: metricName,
    value: Math.round(value),
    custom_parameters: {
      unit: unit || 'ms',
    },
  });
};

// Scroll depth tracking
export const useScrollDepthTracking = () => {
  useEffect(() => {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90, 100];
    const tracked = new Set();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track milestone thresholds
        thresholds.forEach((threshold) => {
          if (scrollPercent >= threshold && !tracked.has(threshold)) {
            tracked.add(threshold);
            trackEvent('scroll_depth', {
              event_category: 'engagement',
              event_label: `${threshold}%`,
              value: threshold,
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

// Time on page tracking
export const useTimeOnPageTracking = () => {
  useEffect(() => {
    const startTime = Date.now();

    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime;
      trackEvent('time_on_page', {
        event_category: 'engagement',
        value: Math.round(timeOnPage / 1000), // Convert to seconds
        custom_parameters: {
          page_url: window.location.pathname,
        },
      });
    };

    // Track on page unload
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Track at intervals for long sessions
    const interval = setInterval(() => {
      trackTimeOnPage();
    }, 30000); // Every 30 seconds

    return () => {
      window.removeEventListener('beforeunload', trackTimeOnPage);
      clearInterval(interval);
    };
  }, []);
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
