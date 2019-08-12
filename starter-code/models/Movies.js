const moongoose = require('mongoose');
const Schema = moongoose.Schema


const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
})


const Movie = moongoose.model('Movie', movieSchema)
module.exports = Movie