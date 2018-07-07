const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genere: String,
  plot: String
});

module.exports = mongoose.model('Movies', movieSchema);