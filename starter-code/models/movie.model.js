const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        genre: String,
        plot: String,
    },
    {
        timestamps: true
    }
)

module.exports = model('Movie', movieSchema);