let mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String
});

let Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
