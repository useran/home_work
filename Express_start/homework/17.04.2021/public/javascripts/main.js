const answEl1 = document.querySelector(".output1");
const answEl2 = document.querySelector(".output2");
const formSet = document.querySelector(".set");
const formGet = document.querySelector(".get");


formGet.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formGet);
  axios.post('/get', data)
    .then(r => {
      if (typeof(r.data) !== 'string'){
        const resHtmlStr = r.data.reduce((htmlStr, el) => {
            return `${htmlStr}
            <li>${el.tempK}</li>
            <li>${el.windS}</li>
            <li>${el.rad}</li>
            <li>${el.pressure}</li><hr>`
          }, '');
        answEl1.innerHTML = resHtmlStr;
      } else {
        answEl1.innerHTML = r.data;
      }
    })
    .catch(e => answEl1.innerHTML = `ERROR: ${e}`);
});


formSet.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSet);
  axios.post('/set', data)
    .then(r => {
      if (typeof(r.data) !== 'string'){
        const resHtmlStr = r.data.reduce((htmlStr, el) => {
            return `${htmlStr}
            <li>${el.temperature}</li>
            <li>${el.windSpeed}</li>
            <li>${el.radiation}</li>
            <li>${el.pressure}</li><hr>`
          }, '');
        answEl2.innerHTML = resHtmlStr;
      } else {
        answEl2.innerHTML = r.data;
      }
    })
    .catch(e => answEl2.innerHTML = `ERROR: ${e}`);
});