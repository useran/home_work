const answEl = document.querySelector(".output");
const formSel = document.querySelector(".select");
const formTag = document.querySelector(".tags-form");

const thenOutStr = r => {
  if (typeof(r.data) === 'string'){
    answEl.innerHTML = r.data;
  } else {
    const resHtmlStr = r.data.reduce((htmlStr, el) => {
      return `${htmlStr}<li>${el.title}</li><li>${el.author}</li><li>${moment(el.date).format('YYYY-MM-DD')}</li><li>${el.article}</li><li>${el.tags}</li><hr>`
    }, '');
    answEl.innerHTML = resHtmlStr;
  }
  return r;
}

formSel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSel);
  axios.post('/search/date', data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

formTag.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formTag);
  axios.post('/search/tag', data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});