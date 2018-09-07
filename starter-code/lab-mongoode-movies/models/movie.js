const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    genre: {
        type: String,
        "default": "Drama"
    },

    plot: {
        type: String,
        required: true,
        maxLength: 200
    }

});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;