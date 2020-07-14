const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;