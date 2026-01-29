const CACHE_NAME = "haq-batil-final-v99";

const CORE_FILES = [
  "./",
  "index.html",
  "app.html",
  "viewer.html",
  "style.css",
  "main.js"
];

// 👉 ADD ALL YOUR PDFs HERE (YES, ALL)
const PDF_FILES = [
  "pdf/namaz-mutarjam.pdf",
  "pdf/farman-rehbar-kamil.pdf",
  "pdf/kanoon-rehbar-kamil.pdf",
  "pdf/naats.pdf",
  "pdf/aayat-book.pdf"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([...CORE_FILES, ...PDF_FILES]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match("index.html").then(response => {
        return response || fetch(event.request);
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
