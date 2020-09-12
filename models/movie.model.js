const mongoose = require("mongoose")

const newSchema = {

    title: {

        type: String,
        required: true,
        default: 'Anonymus'
    },
    genre: String,

    plot: String

}

const movieSchema = new mongoose.Schema(newSchema, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie