importScripts('workbox-3.6.1/workbox-sw.js');
workbox.setConfig({
  debug: false,
  modulePathPrefix: 'workbox-3.6.1/'
});
workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([]);
workbox.precaching.precacheAndRoute([{
   "url": "assets/fonts/ionicons.woff2?v=4.4.3"
}]);
