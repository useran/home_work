const express = require('express');
const router = express.Router();
const axios = require('axios');

let url = 'https://swapi.dev/';

router.get('/', function(req, res) {
  res.render('index', { title: 'Start' });
});


router.get('/characters/:id', async function(req, res) {
  
  const json = await axios.get(`https://swapi.dev/api/people/${req.params.id}/`);
  const movieLinks = json.data.films.map(e => axios.get(e));

  const objMoviesArr = await Promise.all(movieLinks);
  const movieArr = objMoviesArr.map(e => e.data.title);
  
  const speciesLinks = objMoviesArr.map(e => e.data.species);
  const speciesArr = speciesLinks.map(e => e.map(el => axios.get(el)));
  
  const specNameArr = [];
  const objSpeciesArr = [];
  
  for(let i=0; i<speciesArr.length; i++){
    objSpeciesArr[i] = await Promise.all(speciesArr[i]);
    specNameArr[i] = objSpeciesArr[i].map(e => e.data.name);
  }

  res.render('index', { title: json.data.name, movie: movieArr, species: specNameArr});
});



module.exports = router;
