const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    }
})

const Movies = mongoose.model('movies', movieSchema)

module.exports = Movies