const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/controller');
const moment = require('moment');
const Ajv = require("ajv");
const ajv = new Ajv();


const inputToArr = (req, res, next) => {
  req.body.tags = req.body.tags.split(/[,.:!-?;]/).join('').split(' ');
  next();
}

const inputToISO = (req, res, next) => {
  req.body.from = moment(req.body.from).toISOString();
  req.body.to = moment(req.body.to).toISOString();
  next();
}



router.get('/', controllers.getArticles);

router.post('/addArticle', upload.none(), inputToArr, controllers.addNewArticle);

router.get('/search', controllers.searchPage);

router.post('/search/date', upload.none(), inputToISO, controllers.searchArticle);

router.post('/search/tag', upload.none(), controllers.searchArticleByTag);




module.exports = router;
