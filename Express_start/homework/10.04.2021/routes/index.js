const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const controllers = require('../controllers/controller');
const Ajv = require("ajv");
const ajv = new Ajv({allErrors: true});
const validSchema = require('./valid_Schema');


const validator = (req, res, next) => {
  const schema = validSchema;
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) {
    req.body.err = [...new Set(validate.errors.map(elem => elem.instancePath.slice(1)))];
    res.send(req.body.err);
  } else {
    next();
  }
}


router.get('/', controllers.renderIndex);

router.post('/check', upload.none(), validator, controllers.doSth);



module.exports = router;
