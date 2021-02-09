const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String
})

const Movies = model("Movies",movieSchema);
module.exports = Movies;