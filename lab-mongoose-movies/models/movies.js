const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String
});

const MovieModel = mongoose.model('MovieModel', movieSchema); //create the model with the schema

module.exports = MovieModel;
