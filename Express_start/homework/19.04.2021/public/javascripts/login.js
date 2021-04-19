const answEl = document.querySelector(".output");

const logUserFunc = () => {
  const formLog = document.querySelector(".login");
  formLog.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(formLog);
    axios.post('/login/logUser', data)
      .then(r => {
        if (!r.data) {
          answEl.innerHTML = 'Wrong login or password';
        } else {
          window.location.href = `/welcome/?name=${r.data.name}`;
        }
      })
      .catch(err => console.log(err))
  });
}

logUserFunc();