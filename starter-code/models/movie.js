// models/movie.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: String,
        genre: String,
        plot: String,

    },
    {
        timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
        }
      }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;