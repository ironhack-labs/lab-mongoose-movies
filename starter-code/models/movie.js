
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

const Movie = mongoose.model('Movie', droneSchema);

module.exports = Movie;