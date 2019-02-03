const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebitySchema = new Schema({
  name : String,
  occupation: String,
  catchPhrase:  String
});

const Celebrity = mongoose.model('Celebrity', celebitySchema);
module.exports = Celebrity;