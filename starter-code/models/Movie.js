const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieScheme = new Schema({
  title: String,
  genre: String,
  plot: String
});

const Movie = mongoose.model('Movie', movieScheme);

module.exports = Movie;