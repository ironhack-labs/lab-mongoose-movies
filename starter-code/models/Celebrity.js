const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = model("Celebrity", celebSchema);

module.exports = Celebrity;
