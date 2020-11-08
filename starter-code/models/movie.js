// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const moviesSchema= new Schema({
        title: String,
        genre: String,
        plot: String,
});
// module.exports = model('Movie', movieSchema);

const Movie = mongoose.model('Movie', moviesSchema);
module.exports = Movie;
