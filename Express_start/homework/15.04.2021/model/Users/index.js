const mongoose = require('mongoose');
const generalSchema = require('./schema.js');
const path = require('path');
const moment = require('moment');


//set-up of age getter&setter
generalSchema.virtual('age')
  .get(function() {
    const timeNow = moment().valueOf();
    return (timeNow - moment(this.dOb).valueOf())/31556952000;
  })
  .set(function(age){
    const timeNow = moment().valueOf();
    this.dOb = moment(timeNow - age*31556952000).toISOString();
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