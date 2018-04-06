console.log("Hamster");

var cacheName = 'MapAppCache';
var filesToCache = [

]

//Install Service Worker and Cache App Content
self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('Service Worker Caching App Shell');
            return cache.addAll(filesToCache);
        })
    )
});

//
self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', function (event) {
    console.log('Service Worker Fetching App Data', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        }
        )
    )
})

//Service Worker Fetch for offline
self.addEventListener('fetch', function (event) {

} );

