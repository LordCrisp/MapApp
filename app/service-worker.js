

var cacheName = 'MapAppCache';
var filesToCache = [
    "/",
    "/index.html",
    "/assets/css/master.css",
    "/assets/js/loader.js"
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
self.addEventListener('fetch', function(event) {
    console.log('Handling fetch event for', event.request.url, version);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                //console.log('Found response in cache:', response);
                return response;
            }
            //console.log('No response found in cache. About to fetch from network...', event.request.url);

            return fetch(event.request).then(function(response) {
                //console.log('Response from network is:', response);
                return response;
            }).catch(function(error) {
                console.error('Fetching failed:', error);
                throw error;
            });
        })
    );
});