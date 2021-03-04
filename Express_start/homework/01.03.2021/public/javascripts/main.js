/* const streamRead = fs.createReadStream('1.mp4');
let chunks = 0;
streamRead.on('readable', () => {
    let data = streamRead.read();
    data ? chunks += 1 : console.log('data is null');
}) */

const form = document.querySelector("form");
const answEl = document.querySelector(".wrapper");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(form); 
    axios.post('/', data)
        .then(r => answEl.innerHTML = r.data)
        .catch(er => console.log('>>>>>>er:', er));
})