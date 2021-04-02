const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    maxLength: 250, 
    required: [true, 'Enter a name']
  }, 
  surname: {
    type: String,
    required: [true, 'Enter a surname'],
    maxLength: 250
  }, 
  dOb: Date, 
  experience: Number,
  role: {
    type: String,
    required: true,
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