const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name : { type: String, required: [true, 'Insert name']},
  occupation : { type: String, required: [true, 'Insert occupation']},
  catchPhrase : { type: String, required: [true, 'Insert catchPhrase']},
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
