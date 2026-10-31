const CACHE_VERSION = 'v1.0.0'; // Mude isso no futuro se trocar ícones

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Deixa o navegador fazer o cache padrão
});
