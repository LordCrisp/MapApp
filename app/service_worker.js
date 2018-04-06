self.addEventListener('fetch', function (evt) {
    if (event.request.url.indexOf('https://maps.googleapi.com/js') == 0) {
        event.respondWith(
            // Handle Maps API requests in a generic fashion,
            // by returning a Promise that resolves to a Response.
        );
    } else {
        event.respondWith(
            // Some default handling.
        );
    }
} );
function(){
    console.log("Fisk");
}
