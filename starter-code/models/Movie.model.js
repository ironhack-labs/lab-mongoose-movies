const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    plot: String,
    stars: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Movie"
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie