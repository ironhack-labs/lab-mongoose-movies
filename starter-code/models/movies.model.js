const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MoviesSchema = new Schema({
    title: {
      type: String,
      unique: true
    }, 
    genre: String,
    plot: String
  }, { timestamps: true });

const Movie = mongoose.model('Movies', MoviesSchema);

module.exports = Movie;