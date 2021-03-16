const formSel = document.querySelector(".select");
const formAdd = document.querySelector(".add");
const formDel = document.querySelector(".delete");
const answEl = document.querySelector(".output");

//function for building an output string
const thenFrame = r => {
  const resHtmlStr = r.data.reduce((htmlStr, el) => {
    return `${htmlStr}<li class='entries-${el.id}'>${el.id}. ${el.make} ${el.model} ${el.year} <button id='${el.id}' class='red-cross'>&#10060;</button> <button id='${el.id}' class='edit'>&#9998;</button></li>`;
  }, '');
  answEl.innerHTML = resHtmlStr;
}

//function for adding eventlistener to "close-cross" button and preparing a post send-out with axios
const thenDelete = () => {
  const bttns = document.querySelectorAll('.red-cross'); 
  bttns.forEach(el => {
    el.addEventListener('click', event => {
      axios.post('/delete', { data: event.target.id })
        .then(thenFrame)
        .catch(e => answEl.innerHTML = `ERROR: ${e}`);
    })
  })
}

//function for adding eventlistener to "edit" button and preparing an "update form" + adding event listener to the form
const thenEdit = () => {
  const editBtns = document.querySelectorAll('.edit'); 
    editBtns.forEach(el => {
      el.addEventListener('click', event => {
        const currEntry = document.querySelector(`.entries-${event.target.id}`).innerHTML;
        const entryArr = currEntry.slice(0, currEntry.indexOf(' <')).split(' ');
        document.querySelector(`.entries-${event.target.id}`).innerHTML =
          `<form class="update">
            <input type="text" name="id" value="${event.target.id}">
            <input type="text" name="make" value="${entryArr[1]}">
            <input type="text" name="model" value="${entryArr[2]}">
            <input type="text" name="year" value="${entryArr[3]}">
            <input type="submit" value="Update">
          </form>`
        const formUpd = document.querySelector(".update");
        formUpd.addEventListener("submit", function(event) {
          event.preventDefault();
          const data = new FormData(formUpd); 
          axios.post('/update', data)
            .then(thenFrame)
            .then(thenDelete)
            .then(thenEdit)
            .catch(e => answEl.innerHTML = `ERROR: ${e}`);
        });
      })
  })
}

//event listener for "filter-form"
formSel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSel); 
  axios.post('/filter', data)
    .then(thenFrame)
    .then(thenDelete)
    .then(thenEdit)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});

//event listener for "insert-form"
formAdd.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formAdd); 
  axios.post('/insert', data)
    .then(thenFrame)
    .then(thenDelete)
    .then(thenEdit)
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});
