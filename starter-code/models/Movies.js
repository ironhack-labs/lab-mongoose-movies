const mongoose = require('mongoose');

const Movies = mongoose.model('movies', new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
}));

module.exports = Movies;
