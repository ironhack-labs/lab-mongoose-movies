const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String
}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie