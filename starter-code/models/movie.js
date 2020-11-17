const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: String,
    genre: String,
    plot: String
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;
