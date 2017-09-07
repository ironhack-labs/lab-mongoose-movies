
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name : String,
  occupation: String,
  catchPhrase: String
});

module.exports = mongoose.model('Movies', movieSchema);
