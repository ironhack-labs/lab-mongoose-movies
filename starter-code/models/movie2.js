const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie2Schema = new Schema({
    name: String,
    genre: String,
    plot: String
});

const Movie2 = mongoose.model('Movie2', movie2Schema);

module.exports = Movie2;