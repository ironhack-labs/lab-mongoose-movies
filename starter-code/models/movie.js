/* jshint esversion: 9*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    name: String,
    genre: String,
    plot: String,
    cast: []
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