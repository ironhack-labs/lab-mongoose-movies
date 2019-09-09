const Movie = require('../models/Movie')

exports.allMovies = async (req,res,next) => {
  const movies = await Movie.find()
  res.render('movies-list', {movies})
}