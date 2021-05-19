const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  googleId: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  }, 
  lastName: {
    type: String,
  }, 
  strategy: {
    type: String,
  }}, 
  { timestamps: true }
);

module.exports = profileSchema;