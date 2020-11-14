const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    set: text => text.charAt(0).toUpperCase() + text.substring(1)
  },
  genre: {
    type: [String]
  },
  plot: {
    type: String
  }
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie