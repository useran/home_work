const answEl1 = document.querySelector(".output1");
const answEl2 = document.querySelector(".output2");
const formSet = document.querySelector(".set");
const formGet = document.querySelector(".get");


formSet.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(formSet);
  axios.post('/set', data)
    .then(r => {
      if (typeof(r.data) !== 'string'){
        const resHtmlStr = r.data.reduce((htmlStr, el) => {
            return `${htmlStr}
            <li>${el.temperature} C</li>
            <li>${el.windSpeed} Km/h</li>
            <li>${el.radiation} R</li>
            <li>${el.pressure} Pa</li><hr>`
          }, '');
        answEl2.innerHTML = resHtmlStr;
      } else {
        answEl2.innerHTML = r.data;
      }
    })
    .catch(e => answEl2.innerHTML = `ERROR: ${e}`);
});