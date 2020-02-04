// Iteration #7: The Movie Model
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const moviesSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }],
  },
  {
    timestamps: true,
  }
);
// const Movie = model('Movie', moviesSchema);
// module.exports = Movie;
module.exports = model('Movie', moviesSchema);
