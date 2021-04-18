const mongoose = require('mongoose');
const userSchema = require('./schema.js');
const path = require('path');
const { createHash } = require('crypto');

userSchema.statics.checkForPassLog = async function(email, password){
  const dataOut = await this.find({}, {__v:0});
  const dataCheck = dataOut.filter(el => {
    const tempHash = el.hash;
    el.password = password;
    return el.email === email && el.hash === tempHash ? el : false;
  });
  return dataCheck.length > 0 ? dataCheck : false;
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