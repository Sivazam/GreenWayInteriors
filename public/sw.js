const CACHE_NAME = 'elegant-interiors-v1';
const STATIC_CACHE = `${CACHE_NAME}-static`;
const DYNAMIC_CACHE = `${CACHE_NAME}-dynamic`;
const IMAGE_CACHE = `${CACHE_NAME}-images`;

const STATIC_FILES = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/manifest.json',
  '/favicon.ico',
  '/offline'
];

const CACHE_STRATEGIES = {
  static: 'cache-first',
  dynamic: 'network-first',
  images: 'cache-first'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.addAll(STATIC_FILES);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith(CACHE_NAME))
          .filter(cacheName => cacheName !== STATIC_CACHE && 
                               cacheName !== DYNAMIC_CACHE && 
                               cacheName !== IMAGE_CACHE)
          .map(cacheName => caches.delete(cacheName))
      );
    })
    .then(() => self.clients.claim())
  );
});

// Fetch event - handle requests with appropriate caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different request types
  if (request.method === 'GET') {
    // Handle static files
    if (STATIC_FILES.includes(url.pathname)) {
      event.respondWith(
        caches.match(request)
          .then(response => response || fetch(request))
      );
      return;
    }

    // Handle image requests
    if (request.destination === 'image') {
      event.respondWith(
        caches.open(IMAGE_CACHE)
          .then(cache => {
            return cache.match(request)
              .then(response => {
                const fetchPromise = fetch(request)
                  .then(networkResponse => {
                    // Cache successful responses
                    if (networkResponse.status === 200) {
                      cache.put(request, networkResponse.clone());
                    }
                    return networkResponse;
                  })
                  .catch(() => {
                    // Return a placeholder image for failed requests
                    return new Response(
                      '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image not available</text></svg>',
                      { headers: { 'Content-Type': 'image/svg+xml' } }
                    );
                  });

                return response || fetchPromise;
              });
          })
      );
      return;
    }

    // Handle API requests (network first)
    if (url.pathname.startsWith('/api/')) {
      event.respondWith(
        fetch(request)
          .then(response => {
            // Cache successful API responses
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE).then(cache => {
                cache.put(request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            // Return cached response if network fails
            return caches.match(request);
          })
      );
      return;
    }

    // Handle page requests (network first with cache fallback)
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful page responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached response or offline page
          return caches.match(request)
            .then(response => {
              return response || caches.match('/offline');
            });
        })
    );
  }
});

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync operations
      Promise.resolve()
    );
  }
});

// Handle push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        url: data.url || '/'
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});