const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    isAdmin: Boolean,
    // role: {type: String, enum: ["user", "editor", "admin"]}
    googleId: String
  },
  password: String
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;