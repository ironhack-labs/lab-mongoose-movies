const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const CelebretySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', CelebretySchema);
module.exports = Celebrity;
