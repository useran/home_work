const answEl = document.querySelector(".output");
const bttns = document.querySelectorAll('.red-cross');
const contEl = document.querySelector('.container');
const innerAddForm = document.querySelector('.container').innerHTML;

const axiosHandler = (url, data) => {
  axios.post(url, data)
    .then(thenOutStr) //building an output of data gained from a database
    .then(thenDelete) //adding "delete" functionality to the entries
    .then(thenEdit) //adding "edit" option to the entries
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
}

//adding "edit" option to the entries
const thenEdit = () => {
  const linksEl = document.querySelectorAll('.alink'); 
  linksEl.forEach(el => {
    el.addEventListener('click', event => {
      axios.post('/user', { data: event.target.id })
      .then(r => { 
        document.querySelector('.container').innerHTML =
        `<form class="upd-user">
          <input type="text" style="display:none" name="id" value="${event.target.id}">
          <input type="text" name="name" placeholder="name.." value="${r.data.name}">
          <input type="text" name="surname" placeholder="surname.." value="${r.data.surname}">
          <input type="date" name="dOb" value="${r.data.dOb.slice(0, r.data.dOb.indexOf('T'))}">
          <input type="text" name="experience" placeholder="exp.." value="${r.data.experience}">
          <select id='select' name="role">
            <option value="worker">worker</option>
            <option value="engineer">engineer</option>
            <option value="welder">welder</option>
            <option value="fitter">fitter</option>
            <option value="chief engineer">chief engineer</option>
            <option value="security">security</option>
            <option value="accountant">accountant</option>
          </select>
          <input type="text" name="salary" placeholder="salary.." value="${r.data.salary}">
          <input type="text" name="shift" placeholder="shift.." value="${r.data.shift}">
          <button id="${event.target.id}" type="submit">Update user</button>
        </form>`
        const selectEl = document.getElementById('select');
        selectEl.value = r.data.role;
        const formUpdUser = document.querySelector(".upd-user");
        formUpdUser.addEventListener("submit", function(event) {
          event.preventDefault();
          const data = new FormData(formUpdUser);
          axios.post('/update', data)
            .then(thenOutStr) //building an output of data gained from a database
            .then(thenDelete) //adding "delete" functionality to the entries
            .then(thenEdit) //adding "edit" option to the entries
            .then(() => document.querySelector('.container').innerHTML = innerAddForm)
            .catch(e => answEl.innerHTML = `ERROR: ${e}`);
        })
      })
    })
  })
}

//building an output of data gained from a database
const thenOutStr = r => {
  const resHtmlStr = r.data.reduce((htmlStr, el) => {
    return `${htmlStr}<span id="${el._id}" class='alink'>${el.name}</span><button id='${el._id}' class='red-cross'>&#10060;</button>
    <li>${el.surname}</li>
    <li>${el.dOb}</li>
    <li>${el.experience}</li>
    <li>${el.role}</li>
    <li>${el.salary}</li>
    <li>${el.shift}</li>`
  }, '');
  answEl.innerHTML = resHtmlStr;
}

//adding "delete" functionality to the entries
const thenDelete = () => { 
  const bttns = document.querySelectorAll('.red-cross');
  bttns.forEach(el => {
    el.addEventListener('click', event => {
      axiosHandler('/delete', { data: event.target.id })
    })
  })
}

//func-listener for add-User form
const addUserFunc = () => {
  const formAddUser = document.querySelector(".add-user");
  formAddUser.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(formAddUser);
    axiosHandler('/addUser', data);
    formAddUser.reset();
  });
}

addUserFunc();
thenEdit();
thenDelete();