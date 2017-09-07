const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/movieApp',  {useMongoClient: true});
mongoose.Promise = require('bluebird');

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;