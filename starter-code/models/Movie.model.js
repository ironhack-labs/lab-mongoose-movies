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

module.exports = mongoose.model("Movie", movieSchema)

