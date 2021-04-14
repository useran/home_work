const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');




router.get('/', controllers.getUsers);

router.post('/addUser', upload.none(), controllers.addUser);

router.post('/salary', upload.none(), controllers.getUserBySalary);

router.post('/email', upload.none(), controllers.deleteUserByEmail);

router.post('/update', upload.none(), controllers.findByIdUpd);

router.post('/dOb', upload.none(), controllers.findByAge);

router.post('/set', upload.none(), controllers.setByAge);

module.exports = router;
