const Movie = require('../models/Movie')

exports.findMovies = (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/all', { movies }))
    .catch(err => res.render('movies/all', err))
}

exports.findOneMovie = (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => res.render('movies/one', movie))
    .catch(err => res.render('movies/one', err))
}
exports.viewCreateMovie = (req, res, next) => {
  //res.send(console.log('entra'))
  res.render('movies/create')
}
exports.createMovie = (req, res, next) => {
  Movie.create(req.body)
    .then(movie => res.redirect('/movies'))
    .catch(err => res.send(err))
}

exports.deleteMovie = (req, res, next) => {
  const { id } = req.params
  Movie.findByIdAndRemove(id)
    .then(movie => res.redirect('/movies'))
    .catch(err => res.send(err))
}
