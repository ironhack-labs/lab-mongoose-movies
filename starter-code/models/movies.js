const mongoose = require("mongoose");

const Movies = new mongoose.Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("movies", Movies);
