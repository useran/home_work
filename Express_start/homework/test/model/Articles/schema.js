const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    maxLength: 250, 
    required: [true, 'Enter a title'],
    unique: true,
    match: [/^[a-zA-Z]/, 'Please start with a letter']
  }, 
  author: {
    type: String,
    maxLength: 250, 
    required: [true, 'Enter a title'],
    unique: true,
    match: [/^[a-zA-Z]/, 'Please start with a letter']
  },
  date: Date, 
  article: {
    type: String,
    required: [true, 'Type an article'],
    maxLength: 3000, 
  },
  tags: [{ type: String, maxLength: 5}],
  /* { timestamps: true } */
});

module.exports = articleSchema;