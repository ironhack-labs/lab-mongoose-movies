const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  plot: {
    type: String,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;