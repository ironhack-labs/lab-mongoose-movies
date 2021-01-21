const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: 'Title of movie ir required'
  },
  genre: {
    type: String,
    required: 'Genre of movie ir required'
  },
  plot: {
    type: String,
    required: 'Plot of movie ir required'
  }
}, {timestamps:true})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie