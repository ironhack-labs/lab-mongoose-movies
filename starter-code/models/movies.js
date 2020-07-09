const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
