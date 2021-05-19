const mongoose = require('mongoose');
const profileSchema = require('./schema.js');
const path = require('path');


profileSchema.statics.findByEmail = async function(email){
  const dataOut = await this.findOne({ email: email });
  return dataOut;
}

const modelname = path.basename(__dirname);
const Profile = mongoose.model(modelname, profileSchema);

module.exports = Profile;