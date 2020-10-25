const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
