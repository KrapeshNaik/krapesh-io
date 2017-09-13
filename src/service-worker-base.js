// necessary libs
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
importScripts('https://unpkg.com/workbox-sw@0.0.2/build/importScripts/workbox-sw.dev.v0.0.2.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: '878891727254'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notifTitle = 'Background Message Title';
    const notifOptions = {
        body: payload.data.status,
        icon: 'https://firebase.google.com/_static/images/firebase/touchicon-180.png'
    };

    return self.registration.showNotification(notifTitle, notifOptions);
});

// Create an instance of WorkboxSW.
const workboxSW = new WorkboxSW({
    clientsClaim: true
});

// DO NOT CREATE OR UPDATE THIS LIST BY HAND!
// Instead, add one of their (WorkboxSW) tools
workboxSW.precache([]);

// Set up a route that will match any URL requested that ends in .txt
workboxSW.router.registerRoute(
    '/',
    workboxSW.strategies.cacheFirst({
        cacheName: 'shell',
        cacheExpiration: {
            maxEntries: 1,
            maxAgeSeconds: 60 * 60
        },
        cacheableResponse: {
            statuses: [0, 200]
        }
    })
);

workboxSW.router.registerRoute(
    '/app2',
    workboxSW.strategies.cacheFirst({
        cacheName: 'shell',
        cacheExpiration: {
            maxEntries: 1,
            maxAgeSeconds: 60 * 60
        },
        cacheableResponse: {
            statuses: [0, 200]
        }
    })
);