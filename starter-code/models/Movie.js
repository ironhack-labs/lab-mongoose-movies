const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  img: {type: String, default: 'https://static1.squarespace.com/static/56d8b1ae22482ee6f4d072a7/56d8e6d31bbee06f68301020/56d8e74be32140be19d32228/1469728196445/default_movie.png?format=500w'},
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;