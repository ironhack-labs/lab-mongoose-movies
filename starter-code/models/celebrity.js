const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

// CREATE MODEL
const Celebrity = mongoose.model("Celebrity", celebritySchema);

// EXPORT
module.exports = Celebrity;
