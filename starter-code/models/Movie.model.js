const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
        title: String,
        genre: String,
        plot: String
    }
)

module.exports = mongoose.model('Movie', movieSchema);