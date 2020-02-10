const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const celebritySchema = new Schema(
  {
    name: {type: String},
    occupation: {type: String, default: "unknown"},
    catchPhrase: {type: String},
  }
);

// CREATE MODEL

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
