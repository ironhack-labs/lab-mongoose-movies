const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        uppercase: true
    },
    genre: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie