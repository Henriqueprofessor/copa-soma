const CACHE_VERSION = 'v1.0.0';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Este handler é obrigatório para o Chrome no Android oferecer a instalação como PWA.
  // Por enquanto, deixamos o navegador fazer o cache padrão.
  return;
});
