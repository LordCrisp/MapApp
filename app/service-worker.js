

//Service Worker Fetch for offline
self.addEventListener('fetch', function(e) {
    console.log('Service Worker Fetching App Data', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    )
})

