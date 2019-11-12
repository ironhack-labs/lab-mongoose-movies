const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: { type: String, default: "unknown" },
  catchPhrase: { type: String, default: "I am not funny today" }
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;
