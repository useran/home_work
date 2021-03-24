const formSel = document.querySelector(".select");
const formAdd = document.querySelector(".add");
const formDel = document.querySelector(".delete");
const answEl = document.querySelector(".output");


formSel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSel);
  axios.post('/query', data)
  .then(r => answEl.innerHTML = `Result: ${r.data}`)
  .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});
