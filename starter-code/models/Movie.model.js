const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const moviesSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
  },
  {
    timestamps: true,
  }
);
// const Movie = model('Movie', moviesSchema);
// module.exports = Movie;
module.exports = model('Movie', moviesSchema);
