const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const moviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String
 });

const Movies = model('Movies', moviesSchema);

module.exports = Movies;
