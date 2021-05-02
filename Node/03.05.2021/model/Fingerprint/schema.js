const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const printSchema = new Schema({
  host: String,
  connection: {},
  referer: String,
  counter: {
    type: Number,
    default: 0
  },
  }, 
  /* { timestamps: true } */
);

module.exports = printSchema;