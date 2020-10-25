const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  title: { type: String },
  genre: { type: String },
  plot: { type: String },
});

const Movie = mongoose.model("Movie", Schema);

module.exports = Movie;
