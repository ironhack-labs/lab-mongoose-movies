const mongoose = require('mongoose')
const Schema = mongoose.Schema


const movieSch = new Schema({
  title: String,
  genre: {
    type: String,
    default: 'unknown'
  },
  plot: String
}, { timestamps: true })


const Movie = mongoose.model('Movie', movieSch)

module.exports = Movie