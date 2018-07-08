const mongoose = require("mongoose");

module.exports = mongoose.model("Celebrity", new mongoose.Schema({
    name: {
    type: String,
    required: 'Name is required',
      unique: true
  },
  occupation: {
    type: String,
    default: 'unknown',
  },
  catchPhrase: {
    type: String
  }
}))