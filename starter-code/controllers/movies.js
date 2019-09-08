const Movie = require('../models/Movie')

exports.getMovies = async (req, res) => {
  const movies = await Movie.find()
  res.render('movies/index', { movies })
}

exports.getMovie = async (req, res) => {
  const { id } = req.params
  const movie = await Movie.findById(id)
  console.log('This should work')
  res.render('movies/show', movie)
}

exports.newMovieForm = (req, res) => {
  res.render('movies/new')
}

exports.newMovie = async (req, res) => {
  const { title, genre, plot } = req.body
  await Movie.create({ title, genre, plot })
  res.redirect('/movies')
}

exports.deleteMovie = async (req, res) => {
  const { id } = req.params
  await Movie.findByIdAndRemove(id)
  res.redirect('/movies')
}
