const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type:String, require: true},
    genre: {type:String, require: true},
    plot: {type:String, require: true}
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;