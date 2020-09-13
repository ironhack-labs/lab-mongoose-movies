const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: [String],
        require: true,
        trim: true
    },
    plot: {
        type: String,
        require: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        default: 'https://media.comicbook.com/files/img/default-movie.png'
    }
}, {
    timestamps: true
})


const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie