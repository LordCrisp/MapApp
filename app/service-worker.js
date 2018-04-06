

var cacheName = 'MapAppCache';
var filesToCache = [
    "index.html",
    "assets/css/master.css",
    "assets/js/loader.js"
];

//Install Service Worker and Cache App Content
self.addEventListener('install', function(e) {
    console.log('Service Worker Installing.');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('Service Worker Caching App Shell');
            return cache.addAll(filesToCache);
        })
    )
});

//Service Worker Activation
self.addEventListener('activate', function() {
    console.log('Service Worker Activating.');
});

//Service Worker Fetch for offline
self.addEventListener('fetch', function(e) {
    console.log('Service Worker Fetching App Data', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    )
})

