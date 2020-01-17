const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String
});


const Movie = mongoose.model('MovieModel', movieSchema);


module.exports = Movie;