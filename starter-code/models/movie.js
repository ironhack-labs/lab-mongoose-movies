const {Schema, model} = require("mongoose")

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    }
})

module.exports = model("Movie", movieSchema)