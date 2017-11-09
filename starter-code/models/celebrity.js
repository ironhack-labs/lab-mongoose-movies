const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebrities = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', celebrities);
module.exports = Celebrity;
