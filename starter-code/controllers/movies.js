const Movie = require('../models/Movie')

exports.listMovieNames = async (req, res) => {
  const allMovies = await Movie.find()
  // console.log('Array Movies')
  // console.log(allMovies)
  res.render('movies/index', { allMovies })
}

exports.specificMovie = async (req, res) => {
  const { id } = req.params
  const selectedMovie = await Movie.findById(id)
  //console.log(selectedMovie)
  res.render('movies/show', { selectedMovie })
}

exports.newMovie = (req, res) => res.render('movies/new')

exports.createMovie = async (req, res) => {
  let { title, genre, plot } = req.body
  genre = genre.split(' ')
  console.log(title, genre, plot)
  console.log(req.body)
  await Movie.create({ title, genre, plot })
  res.redirect('/movies')
}

exports.deleteMovie = async (req, res) => {
  const { id } = req.params
  console.log(req.params)
  console.log(id)
  await Movie.findByIdAndDelete(id)
  res.redirect('/movies')
}
