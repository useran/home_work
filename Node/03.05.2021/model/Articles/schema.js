const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  memo: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }},
  { timestamps: true } 
);

module.exports = articleSchema;