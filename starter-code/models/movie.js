const { Schema, model } = require ('mongoose')

const movieSchema = new Schema (
    {
        title: String,
        genre: String,
        plot: String,
    }
)

const movie = model("Movie", movieSchema)

module.exports = movie;