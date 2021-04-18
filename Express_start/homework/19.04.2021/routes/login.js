const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');


router.get('/', controllers.getLogin);

router.post('/logUser', upload.none(), controllers.getInSys);



module.exports = router;
