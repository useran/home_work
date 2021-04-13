const answEl = document.querySelector(".output");
const formSel = document.querySelector(".select");
const formDel = document.querySelector(".delete-user");
const formDate = document.querySelector(".date");
const formUpd = document.querySelector(".update");
const formAddUser = document.querySelector(".add-user");
const formSet = document.querySelector(".age-form");

const axiosHandler = (url, data) => {
  axios.post(url, data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
}

const thenOutStr = r => {
  if (typeof(r.data) !== 'string'){
    const resHtmlStr = r.data.reduce((htmlStr, el) => {
        return `${htmlStr}<span id="${el._id}"><li>${el.name}</li></span>
        <li>${el.surname}</li>
        <li>${el.dOb}</li>
        <li>${el.experience}</li>
        <li>${el.role}</li>
        <li>${el.salary}</li>
        <li>${el.shift}</li>`
      }, '');
    answEl.innerHTML = resHtmlStr;
  } else {
    answEl.innerHTML = r.data;
  }
}

formAddUser.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formAddUser);
  axiosHandler('/addUser', data);
  formAddUser.reset();
})

formSel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSel);
  axios.post('/salary', data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

formDel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formDel);
  axios.post('/email', data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

formDate.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formDate);
  axios.post('/dOb', data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

formUpd.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formUpd);
  axios.post('/update', data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

formSet.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSet);
  axios.post('/set', data)
    .then(thenOutStr)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});