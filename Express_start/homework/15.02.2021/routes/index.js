const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const axios = require('axios');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', upload.none(), async (req, res) => {
  //creating an object of flag link, country code and country name
  const regObj = await axios.get(`https://restcountries.eu/rest/v2/region/${req.body.region}`);
  const countryArr = regObj.data.map(e => {
    return {code: e.alpha2Code, flag: e.flag, name: e.name};
  });
  //creating an array of all cat coutries available in API
  const regCatObj = await axios.get(`https://api.thecatapi.com/v1/breeds`);
  const countryCatArr = regCatObj.data.map(e => e.country_code);
  
  const catObjArr = [];
  const flagLinks = [];
  const namesLinks = [];

  //search for cats from the chosen country
  //and filling out the arrays with those cat objects, flag links and country names
  countryArr.forEach(e => {
    countryCatArr.forEach((el, index) => {
      if (e.code === el) {
        catObjArr.push(regCatObj.data[index]);
        flagLinks.push(e.flag);
        namesLinks.push(e.name);
      }
    })
  })

  //creating an object array which will contain all the objects keys
  const objCatInfoArr = catObjArr.map((e, index) => {
    return new Promise((resolve, reject) => {
      if (e.image && e.image.url) {
        resolve({id: e.country_code, name: e.name, url: e.image.url, flag: flagLinks[index], country: namesLinks[index]});
      } else {
        axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${e.id}`)
          .then(r => {
            resolve({id: e.country_code, name: e.name, url: r.data[0].url, flag: flagLinks[index], country: namesLinks[index]});
          })
          .catch(er => console.log('>>>>er:', er));
      }
    })
  })
  
  //getting non-repetitive country codes in order to group the "one country" cats
  const resultArr = [];
  const nonRepArr = [];
  Promise.all(objCatInfoArr)
    .then(r => {
      r.forEach(e => {
        if (!nonRepArr.includes(e.id)){
          nonRepArr.push(e.id);
        }
      });
      nonRepArr.forEach((e, index) => {
        resultArr[index] = [];
        r.forEach(element => {
          if (e === element.id){
            resultArr[index].push(element);
          }
        });
      })
      res.send(resultArr);
    })
    .catch(er => console.log('>>>>er:', er));
})

module.exports = router;