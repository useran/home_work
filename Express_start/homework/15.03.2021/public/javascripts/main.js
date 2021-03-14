const formSel = document.querySelector(".select");
const formAdd = document.querySelector(".add");
const formDel = document.querySelector(".delete");
const answEl = document.querySelector(".output");

const thenFrame = r => {
  const resHtmlStr = r.data.reduce((htmlStr, el) => {
    return `${htmlStr}<li>${el.id}. ${el.make} ${el.model} ${el.year}</li>`;
  }, '');
  answEl.innerHTML = resHtmlStr;
}

formSel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSel); 
  axios.post('/filter', data)
    .then(thenFrame)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

formAdd.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formAdd); 
  axios.post('/insert', data)
    .then(thenFrame)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

formDel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formDel); 
  axios.post('/delete', data)
    .then(thenFrame)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});
