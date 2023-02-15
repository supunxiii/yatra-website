//creating a constant for static cache
const statCache = "statv4";
//creating a constant for dynamic cache
const dynaCache = "dynav1";

//storing shell/static assets in an array
const assets = [
  "/",
  "/activities.html",
  "/tickets.html",
  "/purchases.html",
  "/index.html",
  "/about-ceylon.html",
  "/aboutus.html",
  "/beaches.html",
  "/contactus.html",
  "/heritage.html",
  "/heritage1.html",
  "/heritage2.html",
  "/sitemap.html",
  "/wildlife.html",
  "/main.js",
  "/css/yatra.css",
  "/css/tickets.css",
  "/css/purchases.css",
  "/images/logo.png",
  "/fallback.html",
];

//the install event
self.addEventListener("install", (evt) => {
  //console.log("Service worker installed.");
  //install event should wait until whatever inside evt.waitUntil() finishes.
  evt.waitUntil(
    //open static cache
    caches.open(statCache).then((cache) => {
      console.log("Caching assets...");
      //adding all assets in assets array into cache
      cache.addAll(assets);
    })
  );
});

//The activate event
self.addEventListener("activate", (evt) => {
  //console.log("Service worker is active!");
  evt.waitUntil(
    //accessing all versions of caches available currently
    caches.keys().then((keys) => {
      //console.log(keys);
      //going through the list pf caches, checking whether the cache name is equal to current cache version/s:static and dynamic and getting rid of any old cache versions
      return Promise.all(
        keys
          .filter((key) => key !== statCache && key !== dynaCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//The fetch event handler
self.addEventListener("fetch", (evt) => {
  //console.log("Fetch event",evt);
  //interrupt the normal request and respond with a custom response
  evt.respondWith(
    //check if the resource exists in cache
    caches
      .match(evt.request)
      .then((cacheRes) => {
        //return from cache if it is there in cache. or else fetch from server
        return (
          cacheRes ||
          fetch(evt.request)
            //when fetching from server, add the request and response to dynamic cache to access the resource/s when offline
            .then((fetchRes) => {
              return caches.open(dynaCache).then((cache) => {
                cache.put(evt.request.url, fetchRes.clone());
                return fetchRes;
              });
            })
        );
        //returning the fallback page if the resource is not available in any of the caches
      })
      .catch(() => {
        //check whether the request url contains .html in it
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("./fallback.html");
        }
      })
  );
});
