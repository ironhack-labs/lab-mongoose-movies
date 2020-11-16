const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
    title: {type: String, required: true},
    genre: {type: String},
    plot: {type: URL}
})

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = Movie