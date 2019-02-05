const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: { type: String, default: 'unknown' },
  catchPhrase: { type: String, required: true },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
