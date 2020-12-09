const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});
const movieModel = mongoose.model("movie-celebrity", movieSchema);

module.exports = movieModel;
