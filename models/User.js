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
});

const User = mongoose.model("User", userSchema);
module.exports = User;
