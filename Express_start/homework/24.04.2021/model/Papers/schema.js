const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paperSchema = new Schema({
  date: Date,
  name: String,
  memo: String,
  author: String,
  signerId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }
  /* { timestamps: true } */
});

module.exports = paperSchema;