import $ from 'jquery';
import mountLoginScreen from './LoginScreen'
import { signUpEmailAndPassword } from '../../auth'
import { isValidEmail, isValidPassword } from '../../validate'


function mountSignUpScreen(){
    $('#root').html(SignUpScreen());
    initSignUpScreenListeners();
}

function SignUpScreen(){
    let container = document.createElement('div');

    container.id = 'signup-screen';
    container.classList.add('signup-screen');
    container.innerHTML = `
    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
    
    <video loop muted autoplay class="bg-video">
    <source src="images/chat-app-bg.mp4" type="video/mp4">
    </video>

    <div id="contain">
    <div id="go-back-btn"><img src="images/back-btn.png"/></div>
        <h1 id="tagline">Le Chat Chat</h1>
        <div id="logoHolder">
            <img src="images/chatcat.png" alt="The Cat Chat Logo" id="logo"/>
        </div>
    <!--login-->
    <div class="upsign">

        <input class="login-input" id="email" type="text" placeholder="email">
        <input class="login-input" id="password" type="password" placeholder="password">
        <input class="login-input" id="password-confirmation" type="password" placeholder="confirm password">
      
    </div>

    <!-- signup-->
    <div id="signLog">
        <button class="signUp" id="signup-btn" >SIGN UP</button>
    </div>
</div>   
    `; 

    return container;
}

function initSignUpScreenListeners(){
    $('#go-back-btn').on('click', function(){
        mountLoginScreen();
    })

    $('#signup-btn').on('click', function(){
        let email = $('#email').val();
        let password = $('#password').val();
        let passwordConfirmation = $('#password-confirmation').val();

        if(!isValidEmail(email)){
            alert('Invalid e-mail');
        }
        else if(!isValidPassword(password)){
            alert('Invalid password');
        } 
        else if(password !==passwordConfirmation){
            alert('Passwords do not match');
        } 
        else {
            signUpEmailAndPassword(email, password);
            alert('You Signed-Up Successfully')
        }
    });
}


export default mountSignUpScreen