"use strict";

(() => {
  const cacheName = "v1";
  
  // Call Install Event
  self.addEventListener("install", e => {
    console.log("Service Worker: Installed");
  });
  
  // Call Activate Event
  self.addEventListener("activate", e => {
    console.log("Service Worker: Activated");
    // Remove unwanted caches
    e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== cacheName) {
              console.log("Service Worker: Clearing Old Cache - here deleting:", cache);
              return caches.delete(cache);
            }
          })
        );
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        return resp || fetch(event.request).then((response) => {
          // return response if invalid
          if(!response || response.status !== 200 || response.type !== "basic") { return response; }
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request, response.clone());
            // NOTE: A response is a stream. We want the browser to consume the response AND the cache consuming
            // the response, so we need to clone it so we have two streams.
            return response;
          });
        });
        // if fetch fails (e.g. offline mode) we could catch and return a default cached response (image for example)
      })
    );
  });
})();
