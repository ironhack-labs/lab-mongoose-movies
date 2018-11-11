const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: [String],
    stars: [String],
    genre: {
        type: String,
        enum: ['drama', 'comedy', 'horror', 'romance']
    },
    description: String,
    spoliers: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;