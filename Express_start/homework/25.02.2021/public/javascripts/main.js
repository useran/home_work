const form = document.querySelector("form");
const answEl = document.querySelector(".wrapper");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(form); 
    axios.post('/', data)
        .then(r => answEl.innerHTML = r.data)
        .catch(er => console.log('>>>>>>er:', er));
})