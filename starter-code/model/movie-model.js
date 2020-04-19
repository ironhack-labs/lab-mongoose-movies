const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    genre: String,
    photo: String,
    plot: String
})

const Movie = mongoose.model('MovieBD', movieSchema)

module.exports = Movie