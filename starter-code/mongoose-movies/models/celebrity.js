const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySch = new Schema({
  name: String,
  ocupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySch);
module.exports = Celebrity;

