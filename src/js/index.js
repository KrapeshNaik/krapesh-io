import app from './vue';

(function () {
    var config = {
        apiKey: 'AIzaSyBK4rmrHzJU4473G8EEocgkRntes6WdohQ',
        authDomain: 'https://krapesh-723c7.firebaseapp.com',
        databaseURL: 'https://krapesh-723c7.firebaseio.com/',
        storageBucket: 'gs://krapesh-723c7.appspot.com/',
        messagingSenderId: '114891145688',
    };
    firebase.initializeApp(config);

    const messaging = firebase.messaging();

    navigator.serviceWorker
        .register('./sw.js')
        .then((registration) => {
            messaging.useServiceWorker(registration);

            messaging
                .requestPermission()
                .then(function () {
                    console.log('Granted');
                    return messaging.getToken();
                })
                .then(function (token) {
                    document.querySelector('#token').innerHTML = token;
                })
                .catch(function (err) {
                    console.log(err);
                });

            messaging.onMessage(function (payload) {
                console.log('message', payload);
            });
        });
})();