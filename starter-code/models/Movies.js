const mongoose = require('mongoose');
// create a new schema object
const Schema   = mongoose.Schema;
// const Movie     = require('../models/Movie');


const movieSchema = new Schema({
    title: {type: String, required: true},
    director: {type: String},
    stars: {type: [String]},
    image: String,
    description: {type: String},
    showtimes: [String],
    
})







const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
