const answEl = document.querySelector(".output");


const addArtFunc = () => {
  const formAddEl = document.querySelector(".add-article");
  formAddEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(formAddEl);
    axios.post('/addArticle', data)
      .then(thenOutStr)
      .then(r => {
        if (typeof(r.data) !== 'string'){
          formAddEl.reset();
        }
      })
      .catch(e => answEl.innerHTML = `ERROR: ${e}`);
  });
}

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

addArtFunc();