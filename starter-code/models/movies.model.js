const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie