const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);

const MoviesModel = mongoose.model("movies", moviesSchema);

module.exports = MoviesModel;