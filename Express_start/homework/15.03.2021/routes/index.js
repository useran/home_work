const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const controllers = require('../controllers/control.js');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/filter', upload.none(), controllers.getCars);

router.post('/insert', upload.none(), controllers.addCars);

router.post('/delete', upload.none(), controllers.deleteCars);


module.exports = router;
