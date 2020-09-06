const { Schema, model } = require("mongoose")

const movieSchema = new Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model("Movie", movieSchema)