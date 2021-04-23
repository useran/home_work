const mongoose = require('mongoose');
const userSchema = require('./schema.js');
const path = require('path');
const { createHash } = require('crypto');


const modelname = path.basename(__dirname);
const User = mongoose.model(modelname, userSchema);

module.exports = User;