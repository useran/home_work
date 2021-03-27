const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');


router.get('/', controllers.getSth);


module.exports = router;
