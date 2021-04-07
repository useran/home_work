const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/controller');
const Ajv = require("ajv");
const ajv = new Ajv();
const validSchema = require('./valid_Schema');


const inputToArr = (req, res, next) => {
  req.body.tags = req.body.tags.split(/[,.:!-?;]/).join('').split(' ');
  next();
}


const validator = (req, res, next) => {

  const schema = validSchema;
  
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  
  if (!valid) {
    console.log(validate.errors)
  } else {
    next();
  }
}



router.get('/', controllers.getArticles);

router.post('/addArticle', upload.none(), inputToArr, validator, controllers.addNewArticle);



module.exports = router;
