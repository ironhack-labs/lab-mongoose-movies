const Movie = require('../models/movie')

exports.findMovies = (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies}) 
    })
    .catch(err =>  {
      res.render('movies/index', err)
    })
} 

exports.findOneMovie = (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      res.render('movies/show', movie)
    })
    .catch(err => {
      res.render('movies/index', err)
    })
}

exports.getCreateOneMovie = (req, res, next) => {
  res.render('movies/new')
}

exports.postCreateOneMovie = (req, res, next) => {
  const { title, genre, plot } = req.body
  Movie.create({ title, genre, plot })
    .then(movie => {
      console.log(movie)
      res.redirect('/movies')
    })
    .catch(err => {
      res.render('movies/new', err)
    })
}