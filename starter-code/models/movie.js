const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    occupation: String,
    plot: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;