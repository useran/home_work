const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const controllers = require('../controllers/control.js');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', upload.none(), controllers.getCars);


module.exports = router;
