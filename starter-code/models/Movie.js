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

module.exports = mongoose.model("Movie", movies);
