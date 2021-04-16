const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  temperature: Number,
  windSpeed: Number,
  radiation: Number, 
  pressure: Number,
  /* { timestamps: true } */
});

module.exports = weatherSchema;