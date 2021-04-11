const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/control.js');
const moment = require('moment');


const inputToISO = (req, res, next) => {
  const timeNow = moment().valueOf();
  let temp =  req.body.to;
  req.body.to = moment(timeNow - req.body.from*31556952000).toISOString();
  req.body.from = moment(timeNow - temp*31556952000).toISOString();
  next();
}


router.get('/', controllers.getUsers);

router.post('/addUser', upload.none(), controllers.addUser);

router.post('/salary', upload.none(), controllers.getUserBySalary);

router.post('/email', upload.none(), controllers.deleteUserByEmail);

router.post('/update', upload.none(), controllers.findByIdUpd);

router.post('/dOb', upload.none(), inputToISO, controllers.findByBirth);

module.exports = router;
