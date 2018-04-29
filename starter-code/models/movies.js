const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/celebrity')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title   : String,
  genre    : String,
  plot : String,

});

const Movie = mongoose.model('Movie', movieSchema);



module.exports = Movie;