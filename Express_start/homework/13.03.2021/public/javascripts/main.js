const form = document.querySelector("form");
const answEl = document.querySelector(".output");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(form); 
  axios.post('/', data)
    .then(r => {
      const str = r.data.reduce((str, e) => {
        return str + `<li>${e.make} ${e.model}</li><br>`;
      }, '');
      answEl.innerHTML = str;
    })
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});
