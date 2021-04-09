const answEl = document.querySelector(".output");
const loginEl = document.getElementById("login");
const quantityEl = document.getElementById("quantity");
const emailEl = document.getElementById("email");


const addArtFunc = () => {
  const formAddEl = document.querySelector(".some_form");
  formAddEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(formAddEl);
    axios.post('/check', data)
      .then(r => {
        if (typeof(r.data) === 'object') {
          answEl.innerHTML = '';
          r.data.includes(loginEl.name) ? loginEl.classList.add('invalid') : loginEl.classList.remove('invalid');
          r.data.includes(quantityEl.name) ? quantityEl.classList.add('invalid') : quantityEl.classList.remove('invalid');
          r.data.includes(emailEl.name) ? emailEl.classList.add('invalid') : emailEl.classList.remove('invalid');
        } else {
          loginEl.classList.remove('invalid');
          quantityEl.classList.remove('invalid');
          emailEl.classList.remove('invalid');
          answEl.innerHTML = `${r.data}`;
        }
      })
      .then(() => addArtFunc())
      .catch(e => answEl.innerHTML = `ERROR: ${e}`);
  });
}

addArtFunc();