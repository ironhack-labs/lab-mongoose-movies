
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  "name": { type: String, required: [true, 'Please enter your name 👎'] },
  "ocupation": { type: String, required: [true, 'Tell me what you Doooo🎶'] },
  "catchPhrase": { type: String, required: [true, 'Don\'t tell me you do not have a catch phrase 😱'] },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;