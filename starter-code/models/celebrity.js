const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: { type: String, required: true },
  occupation: String,
  catchPhrase: String
});

module.exports = mongoose.model("Celebrity", celebritySchema);
