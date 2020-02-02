const Movie = require('../models/Movie')

exports.moviesGet = async (req, res, next) => {
  const movies = await Movie.find().catch( err => next( err ))
  res.render('movies/', {movies})
}

exports.movieGet= async (req, res, next) => {
  const movie = await Movie.findById( req.params.id)
                                   .catch( err=>next( err ) )
  res.render('movies/show', movie )
}

exports.moviesPost = async (req, res, next) => {
  const newMovie = { title, genre, plot} = req.body
  await Movie.create(newMovie).catch( err => next(err))

  res.redirect('/movies')
}

exports.movieDelGet = async (req, res,next) => {
  await Movie.findByIdAndDelete( req.params.id ).catch(err => next(err))
  res.redirect('/movies')
}

exports.movieEditPost = async (req, res, next) => {
  const editMovie = { title, genre, plot} = req.body
  await Movie.findByIdAndUpdate(req.params.id, editMovie).catch( err => next(err))

  res.redirect('/movies')
}
exports.movieEditGet = async (req, res, next) => {
  const movieFound = await Movie.findById( req.params.id ).catch( err => next(err) )
  res.render('movies/edit', movieFound)
}

exports.moviesNewGet = (req, res, next) => res.render('movies/new')