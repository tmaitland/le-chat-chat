import navigate from './navigation'
import $ from 'jquery'


const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

// Functions to login with Google and Facebook
export function logInWithGoogle(){
  socialLogin(googleProvider);
}

export function logInWithFacebook(){
  socialLogin(facebookProvider);
}

export function socialLogin(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    
    alert(errorMessage)
  });
}

//Function to Signup with username and password - creates user
export function signUpEmailAndPassword(email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}


//Function to Login with username and password - user is created and signed in
export function logInWithUserCredentials(){
  let email = $('#email').val();
  let password = $('#password').val();
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}


// Function to authenticate user and log in
export function createPersistantSession(authenticate = () => console.log('no authentication passed to persistant session')) {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(authenticate)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

//Function to signout
export function signOut() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log('signed out successfully');
  }).catch(function (error) {
    // An error happened.
    console.error(error);
  });
}


//Function to Keep the user logged in even away from the chat application
export function session() {
  firebase.auth().onAuthStateChanged(function (user) {
    window.user = user;
    if (user) {
      navigate('chat-screen', user);
    }
    else {
      navigate('login-screen');
    }
  });
}



