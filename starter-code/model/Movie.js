const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: String,
        genre: String,
        plot: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('movie', movieSchema);