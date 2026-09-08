// Service Worker — Asci Certificados
// Sube el número de versión cada vez que publiques cambios en index.html
// para que los teléfonos que ya instalaron la app descarguen la nueva versión.
const CACHE_VERSION = 'asci-certificados-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './icon-apple-touch.png',
  './icon-32.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'
];

// Instala y guarda en caché los archivos principales de la app
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(APP_SHELL).catch((err) => {
        // Si algún recurso externo falla (p.ej. sin conexión durante la instalación),
        // no bloquea el resto de la instalación.
        console.warn('No se pudieron precachear algunos recursos:', err);
      });
    })
  );
  self.skipWaiting();
});

// Elimina cachés de versiones antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Estrategia: intenta red primero (para tener siempre la versión más reciente
// cuando hay conexión), y si falla, sirve desde caché (modo offline).
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => {
        return cached || caches.match('./index.html');
      }))
  );
});
