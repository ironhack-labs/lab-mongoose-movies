const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const movieSchema = new Schema(
    {
        title: String,
        genre: String,
        plot: String
    }, 
    {
        timestamps: true
    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
