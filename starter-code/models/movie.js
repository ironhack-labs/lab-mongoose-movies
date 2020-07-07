const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  genre: { type: String },
  plot: { type: String },
});
mongoose.models = {}
const Movie = mongoose.model("Celebrity", movieSchema);

module.exports = Movie;
