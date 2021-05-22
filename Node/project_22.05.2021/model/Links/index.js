const mongoose = require('mongoose');
const linkSchema = require('./schema.js');
const path = require('path');


linkSchema.statics.createEntry = async function(obj){
  try {
    await this.create(obj);
  } catch(err) {
    return err.message;
  }
}

const modelname = path.basename(__dirname);
const Links = mongoose.model(modelname, linkSchema);

module.exports = Links;