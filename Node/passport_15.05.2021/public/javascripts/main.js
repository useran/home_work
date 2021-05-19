/* const answEl = document.querySelector(".output");
const logoutEl = document.querySelector("#logout");

const logUserFunc = () => {
  const formLog = document.querySelector(".log-form");
  formLog.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(formLog);
    axios.post('/login', data)
  });
}

logUserFunc();

logoutEl.addEventListener('click', ev => {
    console.log('>>>>>>>>>>>out');
    axios.post('/logout');
}) */