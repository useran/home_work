const mongoose = require('mongoose');
const userSchema = require('./schema.js');
const path = require('path');
const { createHash } = require('crypto');

userSchema.statics.findByEmail = async function(email){
    const dataOut = await this.findOne({ email: email });
    return dataOut;
  }

userSchema.methods.checkForPassLog = function(obj){
  return this.hash === obj.hash ? true : false;
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