const { connection } = require('mongoose');
const FingerPrint= require('../model/Fingerprint/index.js');


const getIndex = async(req, res) => {
  res.render('index');
} 

const getData = async(req, res) => {
  const dataToCompare = await FingerPrint.findOne({ host: req.headers.host, connection: req.headers['user-agent'], referer: req.headers.referer });
  if (dataToCompare) {
    const counter = dataToCompare.counter + 1;
    await FingerPrint.findOneAndUpdate({ _id: dataToCompare._id }, { counter: counter });
    const dataOut = await FingerPrint.find({});
    res.render('out', { message: 'Hello again!', data: dataOut });
  } else {
    const newEntry = new FingerPrint({ host: req.headers.host, connection: req.headers['user-agent'], referer: req.headers.referer });
    try {
      await newEntry.save();
      const dataOut = await FingerPrint.find({});
      res.render('out', { message: 'Hi there!You are for the first time here!', data: dataOut });
    } catch(err) {
      res.sendStatus(400);
    }
  }
} 



module.exports = {
  getIndex,
  getData,
}