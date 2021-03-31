const mongoose = require('mongoose');
const userSchema = require('./schema.js');
const path = require('path');

const modelname = path.basename(__dirname);
const User = mongoose.model(modelname, userSchema);

module.exports = User;