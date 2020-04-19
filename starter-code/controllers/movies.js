const Movie = require('../models/Movie')

exports.movieViews = async (req, res) => {
  const moves = await Movie.find()
  res.render('movies', { moves })
}

exports.addMovie = (req, res) => {
  res.render('movies/new')
}

exports.sendMovie = async (req, res) => {
  const { title, genre, plot } = req.body
  await Movie.create({ title, genre, plot })
  res.redirect('/movies')
}

exports.movieGet = async (req, res) => {
  const detail = await Movie.findById(req.params.id)
  res.render('movies/show', detail)
}

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndRemove(req.params.id)
  res.redirect('/movies')
}
