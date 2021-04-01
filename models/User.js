const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Email must be in valid form."],
  },
  password: {
    type: String,
    required: true,
    // match: [
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    //   "Password must include one alphabetic character, one number, and one special character.",
    // ],
  },
});

module.exports = model("User", userSchema);
