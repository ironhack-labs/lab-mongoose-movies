const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {type: String, required: [true, 'Please enter the title of the movie.']},
  plot: {type: String, required: [true, 'Please enter the plot of the movie.']},
  genre: {type: String, required: [true, 'Please enter the genre of the movie.']}
})

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
