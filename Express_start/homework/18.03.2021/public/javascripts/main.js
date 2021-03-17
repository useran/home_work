const formSel = document.querySelector(".select");
const formAdd = document.querySelector(".add");
const formDel = document.querySelector(".delete");
const answEl = document.querySelector(".output");

//function for axios handler 
const axiosHandler = (url, data) => {
  axios.post(url, data)
    .then(thenOutStr) //building an output string-list of data gained from a database
    .then(thenDelete) //adding "delete" functionality to the output list
    .then(thenEdit) //adding "edit" option to the output list
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
}

//building an output string/list
const thenOutStr = r => {
  const resHtmlStr = r.data.reduce((htmlStr, el) => {
    return `${htmlStr}<li class='entries-${el.id}'>${el.id}. ${el.make} ${el.model} ${el.year} <button id='${el.id}' class='red-cross'>&#10060;</button> <button id='${el.id}' class='edit'>&#9998;</button></li>`;
  }, '');
  answEl.innerHTML = resHtmlStr;
}

//adding eventlisteners to "close-cross" button and preparing a post send-out with axios
const thenDelete = () => {
  const bttns = document.querySelectorAll('.red-cross'); 
  bttns.forEach(el => {
    el.addEventListener('click', event => {
      axiosHandler('/delete', { data: event.target.id })
    })
  })
}

//adding eventlisteners to "edit" button and preparing an "update form" + adding event listener to the form
const thenEdit = () => {
  const editBtns = document.querySelectorAll('.edit'); 
  editBtns.forEach(el => {
    el.addEventListener('click', event => {
      const currEntry = document.querySelector(`.entries-${event.target.id}`).innerHTML;
      const entryArr = currEntry.slice(0, currEntry.indexOf(' <')).split(' ');
      document.querySelector(`.entries-${event.target.id}`).innerHTML =
        `${entryArr[0]}
        <form class="update">
          <input type="text" style="display:none" name="id" value="${event.target.id}">
          <input type="text" name="make" value="${entryArr[1]}">
          <input type="text" name="model" value="${entryArr[2]}">
          <input type="text" name="year" value="${entryArr[3]}">
          <input type="submit" value="Update">
        </form>`
      const formUpd = document.querySelector(".update");
      formUpd.addEventListener("submit", function(event) {
        event.preventDefault();
        const data = new FormData(formUpd);
        axiosHandler('/update', data)
      });
    })
  })
}

//event listener for "filter-form"
formSel.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSel); 
  axiosHandler('/filter', data)
});

//event listener for "insert-form"
formAdd.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formAdd);
  axiosHandler('/insert', data) 
});
