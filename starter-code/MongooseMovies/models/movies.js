var mongoose = require('mongoose');

Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;