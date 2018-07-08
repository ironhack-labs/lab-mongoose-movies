const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name: {type:String, required: true},
  occupation: {type:String, required: true},
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebSchema);

module.exports = Celebrity;