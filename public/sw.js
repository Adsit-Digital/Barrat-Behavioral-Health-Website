// Generate cache name with timestamp to ensure updates on new deployments
const CACHE_VERSION = '4.3.0'; // Bumped to force cache refresh
const CACHE_NAME = `barrat-health-v${CACHE_VERSION}-${self.__BUILD_ID__ || Date.now()}`;
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/testimonials',
  '/referrals',
  '/blog'
];

// External resources from CDN that should be cached
const EXTERNAL_RESOURCES = [
  '/media/barrat%20behavioral%20health%20and%20primary%20care.svg',
  '/media/videoBanner.mp4',
  '/media/header-curve1.svg',
  '/media/Rediscover_Wellness.mp4',
  '/media/supporting%20pages%20background.webm',
  '/media/insurance-carriers-accepted.png',
  '/media/Kadija%20Conteh-Barrat%20(1).png'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first for static assets
  CACHE_FIRST: 'cache-first',
  // Network first for API calls
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate for dynamic content
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        // Cache static assets first
        return cache.addAll(STATIC_ASSETS)
          .then(() => {
            console.log('[SW] Static assets cached successfully');
            // Cache external resources
            return Promise.allSettled(
              EXTERNAL_RESOURCES.map(url => 
                fetch(url)
                  .then(response => {
                    if (response.ok) {
                      return cache.put(url, response);
                    }
                  })
                  .catch(error => {
                    console.warn(`[SW] Failed to cache external resource ${url}:`, error);
                  })
              )
            );
          });
      })
      .then(() => {
        console.log('[SW] All assets cached successfully');
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        // Take control of all clients immediately
        return self.clients.claim();
      })
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

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle different types of requests
  if (isExternalResource(request.url)) {
    event.respondWith(cacheFirst(request));
  } else if (isDynamicAsset(url.pathname)) {
    // JS and CSS: serve from cache but revalidate in background
    event.respondWith(staleWhileRevalidate(request));
  } else if (isStaticAsset(url.pathname)) {
    // Images, fonts, videos: cache-first (rarely change)
    event.respondWith(cacheFirst(request));
  } else if (isApiRequest(url.pathname)) {
    event.respondWith(networkFirst(request));
  } else if (isPageRequest(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request));
  } else if (isSpaRoute(url.pathname)) {
    // For SPA routes, serve index.html but don't cache the route response
    event.respondWith(serveIndexHtml(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

// Helper functions
function isExternalResource(url) {
  // Check if URL matches any of our external CDN resources
  return EXTERNAL_RESOURCES.some(resource => url.includes(resource)) || 
         url.includes('media.inboundwizard.com');
}

function isStaticAsset(pathname) {
  // Truly static assets that rarely change (images, fonts, videos)
  return /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|mp4|webm|mov)$/i.test(pathname);
}

function isDynamicAsset(pathname) {
  // JS and CSS files should be revalidated to get updates
  return /\.(js|css)$/i.test(pathname);
}

function isApiRequest(pathname) {
  return pathname.startsWith('/api/');
}

function isPageRequest(pathname) {
  // For SPA, only treat the root path as a page request
  // All other routes should be handled by React Router
  return pathname === '/' || pathname === '/index.html';
}

function isSpaRoute(pathname) {
  // Check if this is a SPA route (no file extension, not API, not static asset)
  return !pathname.includes('.') && 
         !pathname.startsWith('/api/') && 
         pathname !== '/' && 
         pathname !== '/index.html';
}

// Cache strategies
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache first strategy failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Network failed, return cached version if available
    return cachedResponse;
  });

  // Return cached version immediately if available, otherwise wait for network
  return cachedResponse || fetchPromise;
}

async function serveIndexHtml(request) {
  // For SPA routes, always serve the main index.html
  // This allows React Router to handle client-side routing
  const indexRequest = new Request('/', {
    method: request.method,
    headers: request.headers
  });
  
  try {
    const cachedIndex = await caches.match(indexRequest);
    if (cachedIndex) {
      return cachedIndex;
    }
    
    // If not cached, fetch from network
    const networkResponse = await fetch(indexRequest);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(indexRequest, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Failed to serve index.html:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions or other background tasks
  console.log('[SW] Background sync triggered');
}

// Push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
