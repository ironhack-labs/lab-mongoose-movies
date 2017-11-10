const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name        : { type: String, required: [true, 'Come on, everybody has a name']},
  occupation  : { type: String, required: [true, 'Type celebrity if the individual is useless']},
  imgUrl      : String,
  alive       : Boolean,
  catchPhrase : String
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
