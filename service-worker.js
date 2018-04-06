
var cacheName = 'MapAppCache';
var filesToCache = [
    "/MapApp/index.html",
    "/MapApp/assets/css/normalize.css",
    "/MapApp/assets/css/master.css",
    "/MapApp/assets/js/loader.js",
    "/MapApp/assets/img/loader.png",
    "/MapApp/assets/img/map.jpg"
]

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

