/* jshint esversion: 9*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [String]
  },
  {
    timestamps: {
      cratedAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;