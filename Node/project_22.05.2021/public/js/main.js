const newLinkEl = document.querySelector(".new-link");
const formEl = document.querySelector(".input-form");
const copyBtn = document.querySelector("#copyEl");

formEl.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formEl);
  axios.post('/', data)
    .then(r => newLinkEl.innerHTML = `http://127.0.0.1:3000/${r.data}`)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
})

copyBtn.addEventListener('click', event => {
  const el = document.createElement('textarea');
  el.value = newLinkEl.innerHTML;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
})