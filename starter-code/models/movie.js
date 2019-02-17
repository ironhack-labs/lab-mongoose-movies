const mongoose = require('mongoose');

const { Schema } = mongoose;

const mySchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movie = mongoose.model('Movie', mySchema);

module.exports = Movie;
