// Schema Definition - Movie
const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
