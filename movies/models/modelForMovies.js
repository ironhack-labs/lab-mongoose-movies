const mongoose = require('mongoose');

// const  = require('./review-model.js');

const Schema = mongoose.Schema;


const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movie = mongoose.model('Movie', movieSchema);


module.exports = Movie;