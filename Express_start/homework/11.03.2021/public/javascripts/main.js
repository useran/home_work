const form = document.querySelector("form");
const answEl = document.querySelector(".output");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(form); 
  axios.post('/', data)
    .then(r => answEl.innerHTML = `OK: ${r.data}`)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});
