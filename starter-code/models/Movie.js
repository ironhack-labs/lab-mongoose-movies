const mongoose = require("mongoose");

const Movie = new mongoose.Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("movie", Movie);
