/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

// 立即接管页面
clientsClaim();
self.skipWaiting();

// 预缓存包含骨架屏的 index.html 和其他重要静态资源
precacheAndRoute(self.__WB_MANIFEST);

// 处理导航请求
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'pages-cache'
  })
);

// 缓存静态资源（JS、CSS）
registerRoute(
  ({ request }) => 
    request.destination === 'style' || 
    request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-assets'
  })
);

// 缓存特定图片
registerRoute(
  ({ url }) => url.href === 'https://static.chuanyinet.com/images/home39a8182b-cccf-4d.png',
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30天缓存
      }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 立即激活新的 Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Any other custom service worker logic can go here.
