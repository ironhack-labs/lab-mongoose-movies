/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSch = new Schema({
  title: String,
  genre: String,
  plot: String
}, { timestamps: true });

const Movie = mongoose.model('Movie', moviesSch);

module.exports = Movie;