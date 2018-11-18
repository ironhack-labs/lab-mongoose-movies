const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    genre: {type:String, enum:['Crime','Drama','Mystery','Thriller','Biography','Action','Sport']},
    plot: String
})

const Movie = mongoose.model('Movie',MovieSchema);
module.exports = Movie;