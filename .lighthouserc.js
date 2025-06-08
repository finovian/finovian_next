module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/about',
        'http://localhost:3000/contact',
        'http://localhost:3000/category/stocks',
        'http://localhost:3000/privacy-policy',
        'http://localhost:3000/terms',
      ],
      numberOfRuns: 5,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
        skipAudits: ['canonical', 'meta-description', 'document-title', 'robots-txt'],
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
        emulatedFormFactor: 'desktop',
        maxWaitForFcp: 30000,
        maxWaitForLoad: 45000,
      },
    },
    assert: {
      assertions: {
        // Performance metrics
        'categories:performance': ['error', { minScore: 0.95 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
        'speed-index': ['error', { maxNumericValue: 3000 }],

        // Accessibility
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'color-contrast': 'error',
        'image-alt': 'error',
        'heading-order': 'error',
        label: 'error',
        'link-name': 'error',

        // Best Practices
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'uses-https': 'error',
        'no-vulnerable-libraries': 'error',
        'errors-in-console': 'warn',

        // SEO
        'categories:seo': ['error', { minScore: 0.95 }],
        'meta-description': 'error',
        'document-title': 'error',
        'link-text': 'error',
        hreflang: 'off',
        canonical: 'error',

        // PWA
        'categories:pwa': ['warn', { minScore: 0.85 }],
        'service-worker': 'warn',
        'installable-manifest': 'warn',
        'splash-screen': 'warn',
        'themed-omnibox': 'warn',
        'content-width': 'error',
        viewport: 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
