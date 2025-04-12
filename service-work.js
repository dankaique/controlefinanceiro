self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('app-financeiro-cache').then(cache => {
      return cache.addAll([
        'pág.html',
        'index.html',
        'dashboards.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});