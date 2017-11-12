const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name: { type: String, required: [true, 'name is required']},
  ocupation: { type: String, required: [true, 'ocupation is required']},
  catchPhrase: { type: String, required: [true, 'catchPhrase is required']}
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
