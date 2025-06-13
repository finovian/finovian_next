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
        skipAudits: ['robots-txt'],
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
        // Chrome flags to prevent file locking issues on Windows
        chromeFlags: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-extensions',
          '--disable-gpu',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding',
          '--disable-features=TranslateUI',
          '--disable-ipc-flooding-protection',
          '--aggressive-cache-discard',
          '--disable-background-networking',
          '--disable-component-extensions-with-background-pages',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--force-fieldtrials=*BackgroundTracing/default/',
          '--disable-hang-monitor',
          '--disable-prompt-on-repost',
          '--disable-client-side-phishing-detection',
          '--disable-sync',
          '--disable-default-apps',
          '--no-first-run',
          '--no-default-browser-check',
          '--single-process',
        ],
      },
    },
    assert: {
      assertions: {
        // Performance metrics (relaxed for development environment)
        'categories:performance': ['warn', { minScore: 0.7 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 3000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.2 }],
        'total-blocking-time': ['warn', { maxNumericValue: 600 }],
        'speed-index': ['warn', { maxNumericValue: 4000 }],

        // Accessibility
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'color-contrast': 'error',
        'image-alt': 'error',
        'heading-order': 'error',
        label: 'error',
        'link-name': 'error',

        // Best Practices
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'is-on-https': 'error',
        'errors-in-console': 'warn',

        // SEO
        'categories:seo': ['error', { minScore: 0.95 }],
        'meta-description': 'error',
        'document-title': 'error',
        'link-text': ['error', { minScore: 0.9 }],
        hreflang: 'off',
        canonical: 'error',
        viewport: 'error',

        // PWA (warnings only since this may not be a PWA)
        'categories:pwa': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
