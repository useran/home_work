const mongoose = require('mongoose');
const userSchema = require('./schema.js');
const path = require('path');
const { createHash } = require('crypto');

userSchema.statics.checkForPassLog = async function(email, password){
  const dataOut = await this.findOne({ email: email }, {__v:0});
  const tempHash = dataOut.hash;
  dataOut.password = password;
  return dataOut.hash === tempHash ? dataOut : false;
}

userSchema.virtual('password')
  .get(function() {
    return 'No data';
  })
  .set(function(pass){
    const hash = createHash('sha256');
    hash.update(pass);
    this.hash = hash.digest('hex');
  })

const modelname = path.basename(__dirname);
const User = mongoose.model(modelname, userSchema);

module.exports = User;