const express = require('express');
const router = express.Router();
const fsProm = require('fs').promises;
const fs = require('fs');
const os = require('os');
const v8 = require('v8');

router.get('/', (req, res) => {
  res.render('index');
});

console.time();
console.log(os.freemem());

let totalHeap = process.memoryUsage().heapTotal;
let usedHeap = process.memoryUsage().heapUsed;
let filePath = 'C:/Users/kozlo/OneDrive/Desktop/sample3.txt';  
let str = '';
let fileObj = Object;

const writeFileFunc = async(str, path, qty) => {
  fileObj = await fsProm.stat(path);
  //building a string
  while (usedHeap < totalHeap && str.length < qty) {
    str = `${str}0`;
    usedHeap = process.memoryUsage().heapUsed;
  }
  //append the given string to the file
  while (fileObj.size < qty) {
    fs.appendFile(path, str, err => { if (err) throw err });
    fileObj = await fsProm.stat(path);
  }
  console.timeEnd();
  console.log(os.freemem()); 
}

writeFileFunc(str, filePath, 1e10);

/* const stream = fs.createWriteStream("C:/Users/kozlo/OneDrive/Desktop/sample3.txt");
const writeChunk = async(data, times) => {
  for (let i=0; i<times; i++){
    if (!stream.write(data)){
      await new Promise(resolve => stream.once('drain', resolve));
    } 
  }
  console.log('All writes are complete!');
  console.timeEnd();
  console.log(os.freemem());
}
console.time();
console.log(os.freemem());
writeChunk('0', 1e10); */

//uploading a file of no less than 2Gb size 
/* router.post('/', (req, res) => {
  const writeStream = fs.createWriteStream('./test.zip');
  req.pipe(writeStream);
  writeStream.close();
  res.sendStatus(200);
  console.log(os.freemem());
}); */
module.exports = router;


