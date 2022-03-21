const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim:true,
    min: 8,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    trim:true,
  },
  password: {
    type: String,
    required: true,
    trim:true,
  },
  confirmpassword: {
    type: String,
    required: true,
    trim:true,
  },

  sport : String,
  business: String,
  general: String,
  entertainment: String,
  health: String,
  science: String,
  technology: String
  //sport:{
    //type: Boolean,
    //default: false
  //},
  //general:{
   // type: Boolean,
    //default: true
  //},
  //entertainment:{
   // type: Boolean,
    //default: false
  //},
  //business:{
   // type: Boolean,
   // default: false
  //},

});

const User = mongoose.model("User", userSchema);
module.exports = User;
