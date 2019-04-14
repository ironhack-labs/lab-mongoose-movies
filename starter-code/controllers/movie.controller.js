const Movie = require('../models/Movie');

module.exports = {
  getMovies(){
    return Movie.find({});
  },
  getMovieById(id){
    return Movie.findById(id);
  },
};