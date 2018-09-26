import { mountLoadingScreen, mountLoginScreen, mountChatScreen, mountSignUpScreen } from './components/screens'

function navigate(screen) {
    switch (screen) {
      case 'loading-screen':
        mountLoadingScreen();
        break;
  
      case 'login-screen':
        mountLoginScreen();
        break;
  
      case 'signup-screen':
        mountSignUpScreen();
        break;
  
      case 'chat-screen':
        mountChatScreen();
        break;
    
      default:
      $('root').html('');
        break;
    }
}

export default navigate;