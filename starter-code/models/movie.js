// requerimos mongoose.
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creamos el modelo de nuestro schema para celebs.
const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;