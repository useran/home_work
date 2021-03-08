const form = document.querySelector(".upload");
const formRev = document.querySelector(".review");
const answEl = document.querySelector(".wrapper");
const answRevEl = document.querySelector(".container");
const linkEl = document.querySelector(".linkEl");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(form); 
    axios.post('/', data)
        .then(r => answEl.innerHTML = r.data)
        .catch(er => console.log('>>>>>>er:', er));
})

formRev.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(formRev); 
    axios.post('/review', data)
        .then(r => {
            if (r.data.length !== 0){
                let str = '';
                r.data.forEach(e => str += `<li>${e.name} / ${e.size} / ${e.time}</li><br>`);
                answRevEl.innerHTML = str;
                linkEl.style.display = 'block';
            } else {
                answRevEl.innerHTML = 'Try again!';
                linkEl.style.display = 'none';
            }
        })
        .catch(er => console.log('>>>>>>er:', er));
})