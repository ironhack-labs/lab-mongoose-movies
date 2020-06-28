const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie