const answEl = document.querySelector(".output");

//func-listener for add-User form
const addUserFunc = () => {
  const formAddUser = document.querySelector(".add-user");
  formAddUser.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(formAddUser);
    axios.post('/register/regUser', data)
      .then(r => console.log(r))
      .catch(err => console.log(err))
  });
}

addUserFunc();