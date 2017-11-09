const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name       : { type: String, required: [true, 'A donde vas sin nombre'] },
  ocupation      : String,
  catchPhrase   : String,

});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
