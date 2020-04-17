const mongoose = require("mongoose");

const celebritiesSchema = new mongoose.Schema({
  name: String,
  occupation: [String],
  catchPhrase: String,
});

const Celebrity = mongoose.model("Celebrity", celebritiesSchema);
module.exports = Celebrity;
