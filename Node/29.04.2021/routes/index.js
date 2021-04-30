var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control');


router.get('/', controllers.getIndex);

router.post('/prep', upload.none(), controllers.prepData);

router.post('/', upload.none(), controllers.processData);



module.exports = router;
