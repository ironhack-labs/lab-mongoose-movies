const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  genre: String ,
  plot: String,
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;