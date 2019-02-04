const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebschema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const celebrities = mongoose.model("celebrities", celebschema);
module.exports = celebrities;
