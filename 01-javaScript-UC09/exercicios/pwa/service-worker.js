// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static-v1').then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './styles.css',
                './script.js',
                './manifest.json',
                './icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
