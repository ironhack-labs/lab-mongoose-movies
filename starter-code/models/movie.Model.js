const mongoose = require('mongoose')

const movieScheme = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    genre: {
        type: String,
        require: true
    },

    plot: {
        type: String,
        require: true
    },

    image: {
        type: String,
        validate: {
            validator: (text) => {
                return text.startsWith("http");
            },
            message: "URL must start with HTTP/HTTPS"
        }
    }
})

const Movie = mongoose.model('Movie', movieScheme)

module.exports = Movie