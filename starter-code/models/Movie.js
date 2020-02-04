const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movie = mongoose.model('Movie', celebritySchema);
module.exports = Movie;
