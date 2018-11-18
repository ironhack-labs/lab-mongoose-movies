const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: String,
  firstName: String,
  lastName: String,
  admin: Boolean
}, {
  timestamps: true
});


module.exports = mongoose.model("User", userSchema);