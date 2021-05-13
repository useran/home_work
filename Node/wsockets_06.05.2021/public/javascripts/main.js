const outEl = document.querySelector('.out');
const containerEl = document.querySelector('.container');
const socket = io();

//function to check whether an element already exists
const checkForElement = (id, msg, container) => {
  const element = document.querySelector(`#${id}`);
  if (!element) {
    const item = document.createElement('li');
    item.setAttribute('id', id);
    item.textContent = msg;
    container.appendChild(item);
  } else {
    element.innerHTML = msg;
  }
}

socket.on('slider', msg => {
  containerEl.innerHTML = '<input type="range" min="0" max="100" value="50" class="slider">';
  const sliderEl = document.querySelector('.slider');
  socket.emit('message', socket.id, sliderEl.value);
  sliderEl.addEventListener('change', event => {
    event.preventDefault();
    socket.emit('message', socket.id, sliderEl.value);
  })
});

socket.on('message-back', (socketID, msg) => {
  checkForElement(socketID, msg, containerEl);
});


socket.on('message-to-main-browser', (socketID, msg) => {
  containerEl.innerHTML = '';
  checkForElement(socketID, msg, outEl);
});

socket.on('clear', socketID => {
  const element = document.querySelector(`#${socketID}`);
  element.remove();
  containerEl.innerHTML = '';
});