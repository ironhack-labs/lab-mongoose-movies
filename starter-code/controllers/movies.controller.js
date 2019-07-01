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

exports.deleteOneMovie = (req, res, next) => {
  const { id } = req.params
  Movie.findByIdAndRemove(id)
    .then(deleteOne => {
      console.log(deleteOne);
      res.redirect('/movies')
    })
    .catch(err => {
      next()
      console.log(err);
    })
}

exports.getUpdateOneMovie = (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      res.render('movies/edit', movie)
    })
    .catch(err => {
      next()
      return err
    })
}

exports.updateOneMovie = (req, res, next) => {
  const { id } = req.params
  const {title, genre, plot} = req.body
  Movie.findByIdAndUpdate(id, {title, genre, plot})
    .then(updateMovie => {
      console.log(updateMovie)
      res.redirect('/movies')
    })
    .catch(err => {
      next()
      console.log(err)
    })
}