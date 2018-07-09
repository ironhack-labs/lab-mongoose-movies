const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let movieSchema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    plot: {type: String, required: true} 
})

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;