const Movie = require('../models/Movie')

exports.listMovieView = async (req, res) => {
  const film = await Movie.find()
  res.render('movies/listMovie', { film })
}

exports.addMovieView = (req, res) => {
  res.render('movies/addMovie')
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

exports.detailMovieView = async (req, res) => {
  const film = await Movie.findById(req.params.id)
  res.render('movies/detailMovie', film)
}
