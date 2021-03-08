const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const fsProm = require('fs').promises;
const moment = require('moment');
const path = require('path');
const zipdir = require('zip-dir');

const storage = multer.diskStorage({
  destination: './uploads' ,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage });
const uploadFiles = upload.array('file', 5);

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', uploadFiles, (req, res) => {
  const timeNow = moment().format('YYYY-MM-DD h:mm');
  req.files.forEach(e => {
    let logStr = `${timeNow}/${e.originalname}/${e.size}`;
    fs.appendFileSync('./main.log', `${logStr}\n`, err => err ? console.log(err) : false);
  })
  fs.appendFileSync('./main.log', `\n`, err => err ? console.log(err) : false);
  res.send('>>>>Sent!');
});

router.post('/review', upload.none(), (req, res) => {
  const getList = async(path) => {
    const filesName = await fsProm.readdir(path);
    const filesProm = filesName.map(e => {
      return fsProm.stat(`./uploads/${e}`)
        .then(obj => {
          return { name: e, size: obj.size, time: obj.birthtime }
        })
    })
    const resultArr = await Promise.all(filesProm);
    const result = resultArr.filter(e => moment(e.time).valueOf() >= moment(`${req.body.date[0]}`).valueOf() && moment(e.time).valueOf() <= moment(`${req.body.date[1]}`).valueOf());
    res.send(result);
  }
  getList('./uploads');
})

//zipping the files
router.get('/files', (req, res) => {
  zipdir('./uploads', { saveTo: './myzip.zip' });
  res.sendFile(path.join(__dirname,'../myzip.zip'));
});

module.exports = router;