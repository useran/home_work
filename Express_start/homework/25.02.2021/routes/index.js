const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const moment = require('moment');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const timeNow = moment().format('YYYY-MM-DD');
    if (!fs.existsSync(`./${timeNow}`)){
      fs.mkdirSync(`${timeNow}`, err => {
        if (err) console.log('>>>>>', err);
      });
    }
      cb(null, `./${timeNow}`);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.slice(file.originalname.lastIndexOf('.')+1);
    cb(null, `${ req.body.filename }.${ ext }`);
  }
})

const upload = multer({ storage: storage });
const uploadFiles = upload.fields([{ name: 'filename'}, { name: 'file'}]);

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', uploadFiles, (req, res) => {
  res.send('>>>>Sent!');
});

module.exports = router;
