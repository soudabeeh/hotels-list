self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/dist/styles.css',
        '/src/main.tsx',
        '/dist/index-de8F-bc7.js',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== 'pwa-cache') {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch((error) => {
        return caches.match('/index.html');
      });
    })
  );
});

caches.open('pwa-cache').then((cache) => {
  cache
    .addAll([
      '/',
      '/index.html',
      '/dist/styles.css',
      '/src/main.tsx',
      '/dist/index-de8F-bc7.js',
      '/icons/icon-192x192.png',
      '/icons/icon-512x512.png',
    ])
    .then(() => console.log('Files cached!'));
});
