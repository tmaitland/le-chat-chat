import moment from '../../../public/lib/moment'

function Message(msg, showUsername) {
    let container = document.createElement('div');
    let isMe = msg.email === user.email;
  
    container.style.textAlign = isMe ? 'right' : 'left';
    container.style.margin = '20px';
    // container.style.backgroundColor = 'crimson';
    

    container.innerHTML=`
    ${showUsername ? 
        `<div class="msg-name">
          ${msg.email.split('@')[0]}
        </div>` 
        : ''}
      
      <div style="display: flex; justify-content: ${isMe ? 'flex-end' : 'flex-start'}"> 
        ${
          !isMe ? 
      `<img class="user-icon" style="border-radius: 50%; background-color: #000;" src="${msg.photoURL ? msg.photoURL : './images/chatcat.png'}" width="50px" height="50px" />` 
          : ''
        }
        
        <div class="bubble ${isMe ? 'msg-bubble-right' : 'msg-bubble-left'}">
          <div class="txt-msg">${msg.text}</div>
          <div class="msg-date-time">${moment(msg.date).format('MM/DD/YYYY hh:mm')}</div>
        </div>
    `

    return container;
}

export default Message;
