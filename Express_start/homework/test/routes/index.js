const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/controller');

const inputToArr = (req, res, next) => {
  req.body.tags = req.body.tags.split(/[,.:!-;]/).join('').split(' ');
  next()
}

router.get('/', controllers.getArticles);

router.post('/addArticle', upload.none(), inputToArr, controllers.addNewArticle);




module.exports = router;
