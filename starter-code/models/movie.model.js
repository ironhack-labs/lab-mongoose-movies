const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: [true, 'enter a title, bitch']
  },
  genre: String,
  plot: String
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie