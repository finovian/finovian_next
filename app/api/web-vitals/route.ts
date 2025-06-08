import { NextRequest, NextResponse } from 'next/server';

interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  entries?: unknown[];
  url?: string;
  timestamp?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as WebVitalsMetric;

    // Log web vitals data
    // Log web vitals data for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', {
        metric: body.name,
        value: body.value,
        rating: body.rating,
        url: body.url,
        timestamp: new Date().toISOString(),
      });
    }

    // In production, you might want to send this to analytics service
    // Examples: Google Analytics, DataDog, New Relic, etc.
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        // You can send custom events to GA4 here
        // This is just a placeholder - implement actual GA4 Measurement Protocol
      }

      // Example: Send to your monitoring service
      // await sendToMonitoringService(body);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing web vitals:', error);
    }
    return NextResponse.json({ error: 'Failed to process web vitals' }, { status: 500 });
  }
}

// Optional: Add GET method for health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: 'web-vitals',
    timestamp: new Date().toISOString(),
  });
}
