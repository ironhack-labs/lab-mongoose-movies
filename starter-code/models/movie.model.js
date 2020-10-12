const mongoose = require('mongoose')

let MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  }
})

let MovieModel = mongoose.model('movie', MovieSchema)

module.exports = MovieModel