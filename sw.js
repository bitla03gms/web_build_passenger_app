// Intercepts HTTP 307 POST-preserving redirects from the payment backend
// and converts them to GET so GitHub Pages doesn't return 405.
self.addEventListener('fetch', function (event) {
  if (
    event.request.method === 'POST' &&
    event.request.mode === 'navigate'
  ) {
    event.respondWith(
      Promise.resolve(Response.redirect(event.request.url, 303))
    );
  }
});

// Take control of all clients immediately without waiting for page reload
self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});