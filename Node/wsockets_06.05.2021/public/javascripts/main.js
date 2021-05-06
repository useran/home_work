const formEl = document.querySelector('.form');
const outEl = document.querySelector('.out');
const inputEl = document.querySelector('.inputEl');
const socket = io();

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (inputEl.value) {
    socket.emit('message', inputEl.value);
  }
})

socket.on('message-back', msg => {
  const item = document.createElement('li');
  item.textContent = msg;
  outEl.appendChild(item);
});