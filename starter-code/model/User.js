const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  googleID: String,
  fullname:String,
  imgName: String,
  description: String,
  imgPath: String


}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;