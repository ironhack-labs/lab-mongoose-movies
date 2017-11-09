const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name : { type: String, required: [true, 'You must insert a celebrity name.'] },
  occupation : { type: String, required: [true, 'You must insert an occupation.'] },
  catchPhrase : { type: String, required: [true, 'You must insert a catch phrase.'] }
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
