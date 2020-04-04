const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    title: { type: String, required: true},
    year: {type: Number},
    director: {type: String},
    genre: { type: Array},
    plot: { type: String, required: true},

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;