const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", userSchema);

module.exports = Movie;
