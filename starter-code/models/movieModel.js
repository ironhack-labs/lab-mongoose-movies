const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [String],
});

const MovieModel = mongoose.model("movies", movieModel);


module.exports = MovieModel;