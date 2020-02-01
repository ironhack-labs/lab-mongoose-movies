const mongoose = require("mongoose");

const movies = new mongoose.Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);
const Movie = mongoose.model("movies", movies);
module.exports = Movie;
