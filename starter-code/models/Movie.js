const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
