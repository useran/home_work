const mongoose = require('mongoose');
const generalSchema = require('./schema.js');
const path = require('path');
const moment = require('moment');

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
  const dateTo = moment().subtract(from, 'years').toISOString();
  const dateFrom = moment().subtract(to, 'years').toISOString();
  const users = await this.find({ dOb: { '$gte': dateFrom, '$lte': dateTo }}, {__v:0});
  return users;
}

//set-up of age getter&setter
generalSchema.virtual('age')
  .get(function() {
    return moment().diff(this.dOb, 'years');
  })
  .set(function(age){
    this.dOb = moment().subtract(age, 'years').toISOString();
  })

generalSchema.statics.getUsersByAge = async function(from, to) {
  const users = await this.find({});
  const objArr = users.filter(el => el.age >= from && el.age <= to)
  return objArr;
}

generalSchema.statics.setUserDoB = async function(id, age) {
  const user = await this.findOne({ _id: id });
  user.age = age;
  await this.findByIdAndUpdate(id, { dOb: user.dOb }); 
}


const modelname = path.basename(__dirname);
const User = mongoose.model(modelname, generalSchema);


module.exports = User;