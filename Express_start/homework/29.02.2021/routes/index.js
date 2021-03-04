const express = require('express');
const router = express.Router();
const fs = require('fs');

/* console.log(os.freemem()); */

router.get('/', (req, res) => {
  res.render('index');
});

//writing a file of 1e10 bytes size  
const stream = fs.createWriteStream("C:/Users/kozlo/OneDrive/Desktop/sample.txt");

const writeChunk = async(data, times) => {
  for (let i=0; i<times; i++){
    if (!stream.write(data)){
      await new Promise(resolve => stream.on('drain', resolve));
    }
  }
}
writeChunk('0', 1e10);

stream.on('finish', () => {
  console.log('All writes are complete!');
});

stream.on('error', function (err) {
  console.log(err);
});

stream.close();

/* console.log(os.freemem()); */

//uploading a file of no less than 2Gb size 
router.post('/', (req, res) => {
  const writeStream = fs.createWriteStream('./test.zip');
  req.pipe(writeStream);
  writeStream.close();
  res.sendStatus(200);
/*   console.log(os.freemem()); */
});

module.exports = router;


