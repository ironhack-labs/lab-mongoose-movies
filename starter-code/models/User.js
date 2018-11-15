const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: String,
}, {
  timestamps: true
});


module.exports = mongoose.model("User", userSchema);