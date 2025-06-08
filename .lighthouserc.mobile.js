module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/about',
        'http://localhost:3000/contact',
        'http://localhost:3000/category/stocks',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'mobile',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
        throttling: {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
        emulatedFormFactor: 'mobile',
        maxWaitForFcp: 30000,
        maxWaitForLoad: 45000,
      },
    },
    assert: {
      assertions: {
        // Performance metrics (mobile is more lenient)
        'categories:performance': ['error', { minScore: 0.85 }],
        'first-contentful-paint': ['error', { maxNumericValue: 3000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 600 }],
        'speed-index': ['error', { maxNumericValue: 5000 }],
        
        // Other categories same as desktop
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:pwa': ['warn', { minScore: 0.85 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};

