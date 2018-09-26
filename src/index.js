import navigate from './navigation'


console.log('javascript works')

var config = {
    apiKey: "AIzaSyDJywfID7WgiE8-LCG3UqoPilWh5L6J4WY",
    authDomain: "le-chat-chat.firebaseapp.com",
    databaseURL: "https://le-chat-chat.firebaseio.com",
    projectId: "le-chat-chat",
    storageBucket: "le-chat-chat.appspot.com",
    messagingSenderId: "728858836580"
  };
 firebase.initializeApp(config);

  navigate('loading-screen');

  