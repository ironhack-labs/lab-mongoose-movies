const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// allows mognoose to understand the structure of the given collection
const celebertySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

// name model and pass chosen schema
const Celeberty = mongoose.model("Celeberty", celebertySchema);

module.exports = Celeberty;


