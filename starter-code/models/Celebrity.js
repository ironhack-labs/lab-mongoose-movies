const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebirtySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,

});

const Celebrity = mongoose.model("Celebrity", celebirtySchema);

module.exports = Celebrity;
