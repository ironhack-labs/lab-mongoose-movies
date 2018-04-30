const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/Celebrities');

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: {type: String},
  })

  const Movie = mongoose.model('Movie', movieSchema);

  module.exports = Movie;