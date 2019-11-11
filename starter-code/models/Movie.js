const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
})

const Movie = mongoose.model("celebrity-movie", MovieSchema);



module.exports = Movie;