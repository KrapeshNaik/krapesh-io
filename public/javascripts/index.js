(function() {
    var config = {
        apiKey: "AIzaSyBK4rmrHzJU4473G8EEocgkRntes6WdohQ",
        authDomain: "https://krapesh-723c7.firebaseapp.com",
        databaseURL: "https://krapesh-723c7.firebaseio.com/",
        storageBucket: "gs://krapesh-723c7.appspot.com/",
        messagingSenderId: "114891145688",
    };
    firebase.initializeApp(config);

    const messaging = firebase.messaging();

    messaging
        .requestPermission()
        .then(function() {
            console.log('Granted');
        })
        .catch(function(err) {
            console.log(err);
        })
})();
