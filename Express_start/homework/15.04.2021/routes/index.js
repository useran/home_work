const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');




router.get('/', controllers.getUsers);

router.post('/dOb', upload.none(), controllers.findByAge);

router.post('/set', upload.none(), controllers.setByAge);

module.exports = router;
