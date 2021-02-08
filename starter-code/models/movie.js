const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

// CREATE MODEL
const Movie = mongoose.model("Movie", movieSchema);

// EXPORT
module.exports = Movie;
