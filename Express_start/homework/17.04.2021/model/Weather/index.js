const mongoose = require('mongoose');
const generalSchema = require('./schema.js');
const path = require('path');


generalSchema.virtual('tempKelvin')
  .get(function() {
    return this.temperature + 273.15;
  })
  .set(function(temp){
    this.temperature = temp - 273.15; 
  })

generalSchema.virtual('windMPH')
  .get(function() {
    return this.windSpeed * 0.62;
  })
  .set(function(speed){
    this.windSpeed = speed / 0.62; 
  })

generalSchema.virtual('radZiv')
  .get(function() {
    return this.radiation / 100;
  })
  .set(function(rad){
    this.radiation = rad * 100; 
  })

generalSchema.virtual('pressMMHg')
  .get(function() {
    return this.pressure / 133;
  })
  .set(function(prs){
    this.pressure = prs * 133; 
  })


const modelname = path.basename(__dirname);
const State = mongoose.model(modelname, generalSchema);


module.exports = State;