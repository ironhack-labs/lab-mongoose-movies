const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String
}, {
  timestamp: true
});

module.exports = mongoose.model("celebrity", schema);
