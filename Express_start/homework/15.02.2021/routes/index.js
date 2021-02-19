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
  const objCatInfoArr = [];
  catObjArr.forEach((e, index) => { 
    if (e.image && e.image.url) {
      objCatInfoArr.push({id: e.country_code, name: e.name, url: e.image.url, flag: flagLinks[index], country: namesLinks[index]});
    }
  })

  //getting non-repetitive country codes in order to group the "one country" cats
  const resultArr = [];
  const nonRepArr = [];
  objCatInfoArr.forEach(e => {
    if (!nonRepArr.includes(e.id)){
      nonRepArr.push(e.id);
    }
  })
  
  //grouping cats by country codes
  nonRepArr.forEach((e, index) => {
    resultArr[index] = [];
    objCatInfoArr.forEach(element => {
      if (e === element.id){
        resultArr[index].push(element);
      }
    })
  })

  res.send(resultArr);

});

module.exports = router;