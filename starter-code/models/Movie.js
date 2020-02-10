const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const movieSchema = new Schema(
  {
    title: {type: String},
    genre: {type: String},
    plot: {type: String},
  }
);

// CREATE MODEL

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
