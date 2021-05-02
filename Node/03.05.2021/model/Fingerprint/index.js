const mongoose = require('mongoose');
const printSchema = require('./schema.js');
const path = require('path');


const modelname = path.basename(__dirname);
const FingerPrint = mongoose.model(modelname, printSchema);

module.exports = FingerPrint;