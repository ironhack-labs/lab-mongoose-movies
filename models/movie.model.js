const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    plot: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie