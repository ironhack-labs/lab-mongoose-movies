const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title : {
        type: String,
        required: [true, 'Title is required'],
        maxlength: [30, 'Title must be not longer than 30 chars'],
        unique: [true, 'The Movie already exist'],
        trim: true
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        maxlength: [30, 'Genre must be not longer than 30 chars']
    },
    plot: {
        type: String,
        required: [true, 'A plot is required']
    }
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;