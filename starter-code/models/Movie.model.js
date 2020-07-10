const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    plot: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    stars: {
      type: [String],
      required: true
    }
  },
  { timestamps: { createdAt: 'created_at' } }
)

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
