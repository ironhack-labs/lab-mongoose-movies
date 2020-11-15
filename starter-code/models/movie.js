// models/movie.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  
  title: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    default: 'Unknown'
  },

  plot: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;