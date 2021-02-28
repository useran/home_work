const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', upload.none(), (req, res) => {
  const tokens = [',', "'", '"', '\n'];
  const values = [...Object.values(req.body)];
  //checking if our fields contain other tokens mentioned earlier 
  values.forEach((el, index) => {
    tokens.forEach(e => el.includes(e) ? values[index] = `"${el}"` : false);
  })
  //adding fields' content to file
  fs.appendFile('1.csv', `\n${values}`, err => {
    err ? res.send(err) : res.send('Everything went smothly!')
  })
});

router.get('/1.csv', (req, res) => {
  res.sendFile(path.join(__dirname,'../1.csv'));
});

module.exports = router;
