const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');




router.get('/', controllers.getUsers);

router.post('/get', upload.none(), controllers.getEntries);

router.post('/set', upload.none(), controllers.setEntries);

module.exports = router;
