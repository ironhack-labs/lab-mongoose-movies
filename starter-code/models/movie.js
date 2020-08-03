const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    title: String, 
    genre: String,
    plot: String
})

let movieModel = mongoose.model('movie', movieSchema);

module.exports =  movieModel;