const form = document.querySelector("form");
const answEl = document.querySelector(".wrapper2");
const autorInpEl = document.querySelector(".autor");
const txtInpEl = document.querySelector(".txtel");
const linkEl = document.querySelector(".linkEl");
const dateEl = document.querySelector(".dateEl");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (dateEl.value.length == 0){
        dateEl.classList.add('invalid');
        return;
    }
    if (!autorInpEl.value.match(/^[a-zA-Zа-яА-ЯїіЇІ\s-.]+$/gi)){ //regExp for <Cyrillic, Latin, dash, dot, space> elements
        autorInpEl.classList.add('invalid');
        return;
    }
    if (!txtInpEl.value.match(/^[a-zA-Z\s.,\d]+$/gi)){ //regExp for <Latin, numbers, dot, comma, space> elements
        txtInpEl.classList.add('invalid');
        return;
    }
    autorInpEl.classList.remove('invalid');
    txtInpEl.classList.remove('invalid');
    dateEl.classList.remove('invalid');

    const data = new FormData(form); 
    axios.post('/', data)
        .then(r => {
            answEl.innerHTML = r.data
            form.reset();
            linkEl.style.display = 'block';
        })
        .catch(er => console.log('>>>>>>er:', er));
})