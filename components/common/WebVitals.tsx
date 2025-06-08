'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric: { name: string; value: number; id: string }) {
  // Send to your analytics endpoint
  if (process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT, {
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
        console.error('Failed to send web vitals:', error);
      }
    });
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Only run in production or when explicitly enabled
    if (
      process.env.NODE_ENV === 'production' ||
      process.env.NEXT_PUBLIC_WEB_VITALS_ENABLED === 'true'
    ) {
      onCLS(sendToAnalytics);
      onINP(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
    }
  }, []);

  return null; // This component doesn't render anything
}
