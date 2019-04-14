const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritieSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritieSchema);

module.exports = Celebrity;