
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", Movie);
module.exports = Movies;


