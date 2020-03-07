const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: Array,
});

const Movie = mongoose.model('Movie-2', movieSchema);

module.exports = Movie;
