const form = document.querySelector("form");
const answEl = document.querySelector(".wrapper");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(form); 
  axios.post('/', data)
    .then(r => {
      let str ='';
      r.data.forEach(e => {
        if (e.length > 1){
          str += `<div class='wrap2'><span><b>${e[0].country}</b><img src='${e[0].flag}'></span><hr><div class='wrap3'>`;
          e.forEach(el => {
            str += `<div class='wrap'>
            <div class='name'>${el.name}</div>
            <div class='pics' style='background-image: url("${el.url}")'></div></div>
            `
          })
        } else {
          str += `</div></div>
          <div class='wrap'>
          <span><b>${e[0].country}</b><img src='${e[0].flag}'></span><hr>
          <div class='name'>${e[0].name}</div>
          <div class='pics' style='background-image: url("${e[0].url}")'></div>
          </div>
            `
        }
      })
      answEl.innerHTML = str;
    })
    .catch(e => answEl.innerHTML = `ERROR: ${e}`);
});