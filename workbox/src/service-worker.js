importScripts('workbox-3.6.1/workbox-sw.js');
workbox.setConfig({
  debug: false,
  modulePathPrefix: 'workbox-3.6.1/'
});
workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([]);
workbox.precaching.precacheAndRoute([{
  "url": "https://static.rasc.ch/Workbox-Logo-Grey.svg"
}]);