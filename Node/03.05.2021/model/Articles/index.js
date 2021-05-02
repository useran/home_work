const mongoose = require('mongoose');
const generalSchema = require('./schema.js');
const path = require('path');


const modelname = path.basename(__dirname);
const Articles = mongoose.model(modelname, generalSchema);


module.exports = Articles;