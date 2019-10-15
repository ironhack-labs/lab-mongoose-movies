const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = mongoose.model("movies",
  new Schema({
    title: String,
    genre: String,
    plot: String,
}))

module.exports = Movie