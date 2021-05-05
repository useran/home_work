const socket = io();
const buttonEl = document.querySelector('.send-button');
  
buttonEl.addEventListener('click', event => {
  event.preventDefault();
  socket.emit('message', "I'm pinging the server");
});
  
socket.on('server message', msg => {
  console.log(msg);
});