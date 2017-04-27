const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  tittle: String,
  genre: String,
  country: String,
})

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
