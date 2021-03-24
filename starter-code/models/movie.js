const { model, Schema } = require('mongoose');

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String },
    plot: { type: String },
  },
  { timestamps: true }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
