import $ from 'jquery';
import Message from './Message';
import { signOut } from '../../auth';


function mountChatScreen(){
    let db = firebase.database();
    let messages = db.ref('messages/')
    
    $('#root').html(ChatScreen());
    initChatScreenListeners(messages);
}

function ChatScreen(){
    let container = document.createElement('div');

    container.id = 'chat-screen';
    container.classList.add('chat-screen');
    container.innerHTML = `
    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">

    <div class="chat-header">
        <div>Welcome ${window.user.email.split('@')[0]}!</div>
        <div id="signout-btn" class="signout-btn"><img class="signout-icon" src="images/sign-out-peace.png"/></div>
    </div>

    <div class="chat-messages"></div>
    
    <div class="chat-input-btn-container">
        <input id="chat-input-msg" class="chat-input-msg" type="text"/>
        <div class="chat-send-btn"><p class="send-msg">SEND</p></div>
    </div>
    `

    return container;
}

function initChatScreenListeners(messages){
    let sendMessage = () => {
        let date = new Date();
        let text = $(".chat-input-msg").val();

          messages.push({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            date: date,
            text: text,
        });

        $(".chat-input-msg").val('');
    }

    $('#signout-btn').on('click', signOut);

    $('.chat-send-btn').on('click', sendMessage);

    $('.chat-input-msg').keypress(function(e){
        if (e.keyCode === 13) {
            sendMessage();
        }
    })

    messages.on('value', function(snapshot){
        let msgs = snapshot.val();

        $('.chat-messages').html('');

        let currentPerson = '';

        for(let mid in msgs){
            let msg = msgs[mid];
            let showUserName = true;

            if(user.email === msg.email){
               currentPerson = msg.email;
               showUserName = false;
            }
            else if (currentPerson = msg.email){
                showUserName = false;
            }
            else {
                currentPerson = msg.email;
            }

            $('.chat-messages').append(Message(msg, showUserName));
        }

        scroll();
    })
}

function scroll(){
    let height = $('.chat-messages')[0].scrollHeight;
    $('.chat-messages').scrollTop(height);
}
//append messages to message screen


export default mountChatScreen;