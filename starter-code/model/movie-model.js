const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    name: String,
})

const Movie = mongoose.model('MovieBD', movieSchema)

module.exports = Movie