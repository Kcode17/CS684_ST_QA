const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
  name :{
      type  : String,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,

general :{
    type  : String,
    required : true,
    default: "yes"
} ,

sport :{
    type  : String,
    required : true,
    default: "no"
} ,

health :{
    type  : String,
    required : true,
    default: "no"
} ,

science :{
    type  : String,
    required : true,
    default: "no"
} ,

business :{
    type  : String,
    required : true,
    default: "no"
} ,

technology :{
    type  : String,
    required : true,
    default: "no"
} ,

entertainment :{
    type  : String,
    required : true,
    default: "no"
} ,

// general: String,
// sport: String,
// health: String,
// science: String,
// business: String,
// business: String,
// technology: String,
// entertainment: String,

date :{
    type : Date,
    default : Date.now
}

});
const User= mongoose.model('User',UserSchema);

module.exports = User;