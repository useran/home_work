const mongoose = require('mongoose');
const generalSchema = require('./schema.js');
const path = require('path');


const modelname = path.basename(__dirname);
const Papers = mongoose.model(modelname, generalSchema);


module.exports = Papers;