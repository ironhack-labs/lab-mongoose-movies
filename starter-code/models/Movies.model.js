const mongoose = require("mongoose")

const MoviesSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String
})

module.exports = mongoose.model("Movie", MoviesSchema)