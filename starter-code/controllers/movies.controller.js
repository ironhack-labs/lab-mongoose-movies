const Movie = require('../models/Movie')

exports.findMovies = (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/all', { movies }))
    .catch(err => res.render('movies/all', err))
}

exports.findOneMovie = (req, res, next) => {
  let id = req.params.id
  Movie.findById(id)
    .then(movie => res.render('movies/show', movie))
    .catch(err => res.render('movies/show', err))
}

exports.viewCreateMovie = (req, res, next) => res.render('movies/new')

exports.createNewMovie = (req, res, next) => {
  let { title, genre, plot } = req.body
  Movie.create({ title, genre, plot })
    .then(movie => res.redirect('/movies'))
    .catch(err => res.render('movies/new', err))
}

exports.deleteMovie = (req, res, next) => {
  let id = req.params.id
  Movie.findByIdAndRemove(id)
    .then(res.redirect('/movies'))
    .catch(err => next())
}
