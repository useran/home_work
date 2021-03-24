const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');

const inputCheck = (req, res, next) => {
  !req.body.from.match(/^[a-zA-Z\d]+$/gi) || req.body.from.length > 10 ? req.body.message = 'error data' : req.body.message = 'value accepted';
  next()
}

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/query', upload.none(), inputCheck, controllers.getSth);


module.exports = router;
