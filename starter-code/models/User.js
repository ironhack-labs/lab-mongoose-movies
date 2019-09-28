const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({

  username: String,
  password: String,
  isAdmin: Boolean,
  role: {type: String, enum: ["Administrator", "Employee", "Customer"]},
  googleID: String
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;