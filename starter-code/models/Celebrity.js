const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const modelSchema = new Schema({
  name : String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', modelSchema);
module.exports = Celebrity;