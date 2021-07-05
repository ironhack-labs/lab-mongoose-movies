const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  password: String},
  {timestamps: true}
  //will give us timestamps for creation and updating
);

const User = mongoose.model("User", userSchema);

module.exports = User;
