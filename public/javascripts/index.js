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
        });

    // get token
    messaging
        .getToken()
        .then(function(currentToken) {
            if (currentToken) {
                console.log('TOKEN', currentToken);
                sendTokenToServer(currentToken);
                updateUIForPushEnabled(currentToken);
            } else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                // Show permission UI.
                updateUIForPushPermissionRequired();
                setTokenSentToServer(false);
            }
        })
        .catch(function(err) {
            console.log('An error occurred while retrieving token. ', err);
            showToken('Error retrieving Instance ID token. ', err);
            setTokenSentToServer(false);
        });
})();
