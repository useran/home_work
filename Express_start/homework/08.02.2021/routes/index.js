const express = require('express');
const router = express.Router();
const axios = require('axios');
const probe = require('probe-image-size');

let url = 'https://dog.ceo/api/breeds/image/random';

router.get('/', function(req, res) {
  const links = [];
  const probes = [];
  const objArr = [];
  
  for(let i = 0; i<28; i++){ //28 - completely a random number of links in arr
    links.push(axios.get(url).then(r => r.data.message));
  }
 
  // pulling 'breed' & 'url' off the links arr
  Promise.all(links).then(r => {
    r.forEach(e => {
      let breed = e.slice(e.indexOf('breeds'), e.lastIndexOf('/')).split('/').splice(1).toString();
      objArr.push({breed: breed, url: e});
    })
    return objArr;
  })
  // creating an arr with 'width' & 'height' properties of an image
  .then(r => {
    r.forEach(e => {
    probes.push(probe(e.url));
    })
    return probes;
  })
  // creating a render arr for output
  .then(() => {
    Promise.all(probes).then(r => {
      return r.map(e => {
        return {width: e.width, height: e.height}
      })
    })
    .then(r => {
      r.forEach((e, index) => {
        objArr[index].width = e.width;
        objArr[index].height = e.height;
      })
      res.render('index', {picObjArr: objArr});
    })
  })
  .catch(err => console.log('>>>> err: ', err));
})

module.exports = router;
