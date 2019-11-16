const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = ({
  title: String,
  genre: String,
  plot: String
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie