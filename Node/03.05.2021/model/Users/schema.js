const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  name: {
    type: String,
    maxLength: 250, 
  }, 
  surname: {
    type: String,
    maxLength: 250
  }, 
  dOb: Date, 
  experience: Number,
  role: {
    type: String,
    enum: ['worker', 'engineer', 'welder', 'fitter', 'chief engineer', 'security', 'accountant']
  },
  salary: Number,
  shift: Number,
  children: [
    { 
      name: {
        type: String,
        maxLength: 250
      },
      age: Number,
    }  
  ],
  transportation: Boolean,
  }, 
  /* { timestamps: true } */
);

module.exports = userSchema;