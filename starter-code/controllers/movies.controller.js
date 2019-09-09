const Movie = require('../models/Movie')

exports.listMovies = async (req, res) => {
  const movies = await Movie.find()
  res.render('movies/index', { movies })
}

exports.detailMovie = async (req, res) => {
  const { id } = req.params
  const movie = await Movie.findById(id)
  res.render('movies/show', movie)
}

exports.addMovieForm = (req, res) => {
  res.render('movies/new')
}

exports.addMovie = async (req, res) => {
  const { title, genre, plot } = req.body
  await Movie.create({ title, genre, plot })
  res.redirect('/movies')
}

exports.deleteMovie = async (req, res) => {
  const { id } = req.params
  await Movie.findByIdAndRemove(id)
  res.redirect('/movies')
}