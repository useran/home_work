const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const controllers = require('../controllers/control.js');

router.get('/', controllers.getIndexPage);

router.get('/table', controllers.getTable);

router.get('/fil_table', controllers.getFilTable);


module.exports = router;
