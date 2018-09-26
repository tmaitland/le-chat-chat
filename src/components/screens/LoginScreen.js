import $ from 'jquery';
import mountSignUpScreen from './SignUpScreen'
import { createPersistantSession, logInWithGoogle, logInWithFacebook, logInWithUserCredentials } from '../../auth'



function mountLoginScreen() {
    $('#root').html(LoginScreen())
    initLoginScreenListeners();
}

function LoginScreen() {
    let container = document.createElement('div');

    container.id = 'login-screen';
    container.classList.add('login-screen');

    container.innerHTML = `
    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">

    <video loop muted autoplay class="bg-video">
        <source src="images/chat-app-bg.mp4" type="video/mp4">
    </video>

    <div id="contain">
        <h1 id="tagline">Le Chat Chat</h1>
        <div id="logoHolder">
            <img src="images/chatcat.png" alt="The Cat Chat Logo" id="logo"/>
        </div>
        <!--login-->
        <div id="login">
            
            <input class="login-input" id="email" type="text" placeholder="email">
            <input class="login-input" id="password" type="password" placeholder="password">
        
        </div>
        
            <div id="fb" class="social-icon"><img src="images/facecon.png" class="icon"/><span>Login with Facebook</span></div>

            <div id="google-login-btn" class="social-icon"><img src="images/googlecon.png" class="icon"/><span>Login with Google</span></div>


        <!-- login-->
        <div id="signLog">
            <button class="signUp" id="signup-btn" >SIGN UP</button>
            <button class="logIn" id="login-btn">LOG IN</button>
        </div>
    </div>

    `
    return container;
}

function initLoginScreenListeners() {
    $('#google-login-btn').on('click', function () {
        createPersistantSession(logInWithGoogle);
    });

    $('#fb').on('click', function () {
        createPersistantSession(logInWithFacebook);
    });

    $('#signup-btn').on('click', function () {
        console.log('I work');
        mountSignUpScreen();
    });

    $('#login-btn').on('click', function () {
        console.log('Did I work?');
        createPersistantSession(logInWithUserCredentials);
    });
}


export default mountLoginScreen;