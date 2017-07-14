// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
    apiKey: "AIzaSyBK4rmrHzJU4473G8EEocgkRntes6WdohQ",
    authDomain: "https://krapesh-723c7.firebaseapp.com",
    databaseURL: "https://krapesh-723c7.firebaseio.com/",
    storageBucket: "gs://krapesh-723c7.appspot.com/",
    messagingSenderId: "114891145688",
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();