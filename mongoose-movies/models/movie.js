/*jshint esversion: 6*/
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = Schema({
  title: String,
  genre: String,
  plot: String
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
