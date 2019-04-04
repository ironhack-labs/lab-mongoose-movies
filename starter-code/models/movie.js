const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: String,
  genre: String,
  plot: String
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
