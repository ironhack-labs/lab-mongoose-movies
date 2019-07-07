const mongoose = require('mongoose');

const Celebrity = mongoose.model('celebrities', new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
}));

module.exports = Celebrity;
