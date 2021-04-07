const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/controller');
const moment = require('moment');


const inputToISO = (req, res, next) => {
  req.body.from = moment(req.body.from).toISOString();
  req.body.to = moment(req.body.to).toISOString();
  next();
}


router.get('/', controllers.searchPage);

router.post('/date', upload.none(), inputToISO, controllers.searchArticle);

router.post('/tag', upload.none(), controllers.searchArticleByTag);



module.exports = router;
