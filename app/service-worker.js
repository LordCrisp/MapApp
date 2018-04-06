console.log("Hamster");

var cacheName = 'MapAppCache';
var filesToCache = [
    "/",
    "/index.html",
    "/assets/css/master.css",
    "/assets/js/loader.js",
    "/assets/js/maps.js"
]

//Install Service Worker and Cache App Content
self.addEventListener('install', function(event) {
    console.log('Service Worker Installing.');
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('Service Worker Caching App Shell');
            return cache.addAll(filesToCache);
        })
    )
});

//Service Worker Activation
self.addEventListener('activate', function(event) {
    console.log('Service Worker Activating.');
});

//Service Worker Fetch for offline
self.addEventListener('fetch', function (event) {
    console.log('Service Worker Fetching App Data', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    )
})

