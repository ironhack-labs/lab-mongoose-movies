const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  image: { type: String, required: false },
  title: String,
  genre: String,
  plot: String
});


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;