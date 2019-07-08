const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const MoviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String
});

const MoviesMod = mongoose.model("MoviesSchema", MoviesSchema);

module.exports = MoviesMod;
