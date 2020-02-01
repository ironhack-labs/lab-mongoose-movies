const Movie = require('../models/Movie')

exports.moviesGet = async (req, res, next) => {
  const movies = await Movie.find().catch( err => next( err ))
  res.render('movies/', {movies})
}