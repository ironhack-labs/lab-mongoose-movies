const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Movie', movieSchema)