const mongoose = require('mongoose');
const generalSchema = require('./schema.js');
const path = require('path');

// search by salary
generalSchema.statics.findBySalary = async function(from, to) {
  const users = await this.find({ salary: { '$gte': from, '$lte': to }}, {__v:0});
  return users;
}

// adding new entry
generalSchema.statics.addNewUser = async function(data) {
  try {
    await this.create(data);
    return 'Went OK!'
  } catch(err) {
    return(err.message);
  }
}

// search by email and delete the entry
generalSchema.statics.findByEmailAndDelete = async function(email) {
  await this.deleteOne({ email: email });
  return;
}

// find by Id and update
generalSchema.statics.findByIdAndUpd = async function(id, obj) {
  await this.findByIdAndUpdate({_id: id }, obj);
  return;
}

// find by dayOfBirth
generalSchema.statics.findByDoB = async function(from, to) {
  const users = await this.find({ dOb: { '$gte': from, '$lte': to }}, {__v:0});
  return users;
}


const modelname = path.basename(__dirname);
const User = mongoose.model(modelname, generalSchema);

module.exports = User;