const socket = io('htt5500p://localhost:5500');
const form = document.getElementById('send-form');
const msgInput = document.getElementById('msgInput');
const msgContainer = document.querySelector(".container")

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    msgContainer.append(messageElement);
}

form.addEventListener('submit' , (e)=>{
    e.preventDefault(); //page is not reload
    const message = msgInput.Value;
    append(`You : ${message}` , right); //to add variable in a string
    socket.emit('send' , message);
    msgInput = ''

})

const name = prompt("Enter your name to join ");
socket.emit('new-user-joined', name);

socket.on('user-joined' , name =>{
    append(`${name} joined the chat`, 'right')
})

socket.on('receive' , data =>{
    append(`${data.name}: ${data.user}` , 'left')
    
})