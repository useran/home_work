const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');


router.get('/', controllers.getUsers);

router.post('/addUser', upload.none(), controllers.addNewUser);

router.post('/delete', controllers.deleteUser);

router.post('/user', controllers.getUserForUpd);

router.post('/update', upload.none(), controllers.updateUser);

module.exports = router;
