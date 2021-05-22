const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

const linkSchema = new Schema({
  longLink: {
    type: String,
    unique: true,
    required: true
  },
  shortLink: {
    type: String,
    unique: true,
    required: true
  },
  expireAt: {
    type: Date,
    default: moment(),
    index: { expires: '35m' },
  }},
  { timestamps: true }
);

module.exports = linkSchema;