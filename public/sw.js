// Service Worker for caching and offline functionality

const CACHE_NAME = 'finovian-v1';
const STATIC_CACHE_NAME = 'finovian-static-v1';
const DYNAMIC_CACHE_NAME = 'finovian-dynamic-v1';

// Cache strategies
const CACHE_FIRST = 'cache-first';
const NETWORK_FIRST = 'network-first';
const STALE_WHILE_REVALIDATE = 'stale-while-revalidate';

// Files to cache immediately
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  '/fonts/Newsreader_9pt-Regular.ttf',
  '/fonts/Newsreader_9pt-Bold.ttf',
  '/fonts/Newsreader_9pt-Medium.ttf',
];

// Routes and their caching strategies
const CACHE_STRATEGIES = {
  '/': STALE_WHILE_REVALIDATE,
  '/about': STALE_WHILE_REVALIDATE,
  '/contact': STALE_WHILE_REVALIDATE,
  '/api/': NETWORK_FIRST,
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      }),
      self.skipWaiting(),
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return (
                cacheName !== STATIC_CACHE_NAME &&
                cacheName !== DYNAMIC_CACHE_NAME
              );
            })
            .map((cacheName) => caches.delete(cacheName))
        );
      }),
      self.clients.claim(),
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Skip API routes for now (can be enhanced later)
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  event.respondWith(handleFetch(request));
});

// Handle fetch with appropriate strategy
async function handleFetch(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Determine cache strategy
  let strategy = STALE_WHILE_REVALIDATE; // default
  
  for (const [route, routeStrategy] of Object.entries(CACHE_STRATEGIES)) {
    if (pathname.startsWith(route)) {
      strategy = routeStrategy;
      break;
    }
  }

  // Static assets (CSS, JS, images)
  if (
    pathname.startsWith('/_next/static/') ||
    pathname.startsWith('/fonts/') ||
    pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|webp|woff|woff2)$/)
  ) {
    strategy = CACHE_FIRST;
  }

  return executeStrategy(request, strategy);
}

// Execute caching strategy
async function executeStrategy(request, strategy) {
  switch (strategy) {
    case CACHE_FIRST:
      return cacheFirst(request);
    case NETWORK_FIRST:
      return networkFirst(request);
    case STALE_WHILE_REVALIDATE:
    default:
      return staleWhileRevalidate(request);
  }
}

// Cache first strategy
async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback response if available
    return new Response('Offline content not available', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

// Network first strategy
async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Start fetch in background
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);
  
  // Return cached response immediately if available
  return cachedResponse || fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(handleNewsletterSync());
  }
});

// Handle newsletter sync when back online
async function handleNewsletterSync() {
  // Implementation for syncing newsletter signups when back online
  console.log('Syncing newsletter signups...');
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    tag: 'finovian-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View',
        icon: '/icon-72x72.png',
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
      },
    ],
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

