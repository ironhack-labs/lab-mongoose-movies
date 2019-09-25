const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    celebrity: {type: Schema.Types.ObjectId, ref: "Celeb"},
    genre: String,
    plot: String,
    owner: {type: Schema.Types.ObjectId, ref: "User"}
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie