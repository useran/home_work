var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');
const multer = require('multer');
const upload = multer();

router.get('/', controller.getIndex);

router.post('/', upload.none(), controller.saveLink);

router.get('/:linkId', controller.getProperLink);



module.exports = router;
