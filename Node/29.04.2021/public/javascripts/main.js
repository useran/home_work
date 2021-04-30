const formEl = document.querySelector('.send-out');
const outEl = document.querySelector('.out');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(formEl);
  axios.post('/prep', data)
    .then(r => outEl.innerHTML = r.data)
    .catch(err => console.log(err))
})