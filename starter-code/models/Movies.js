const mongoose = require('mongoose'); // import mongoose dependencies

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  genre: String,
  plot: String
});

const MovieModel = mongoose.model("Movie", MovieSchema); // name of mongoose model

module.exports = MovieModel;