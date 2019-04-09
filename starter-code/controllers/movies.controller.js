const createError = require('http-errors');
const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = ((req, res, next) => {
  Movie.find({})
    .then( movies => {
      res.render('movies/index.hbs', {movies})
    })
    .catch(error => next(error))
})

module.exports.detail = ((req, res, next) => {
  const criteria = req.params.id
  Movie.findById(criteria)
    .then( movie => {
      res.render('movies/detail.hbs', {movie})
    })
    .catch(error => next(error))
})

module.exports.new = ((req, res, next) => {
  res.render('movies/new.hbs')
})

module.exports.create = ((req, res, next) => {
  const movie = new Movie(req.body)
  console.log(movie)
  movie.save()
    .then( () => {
      res.redirect('/movies')
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('movies/new.hbs')
      }})
})

module.exports.delete = ((req, res, next) => {
  const id = req.params.id
  Movie.deleteOne({_id: id})
    .then( () => {
      res.redirect('/movies')
    })
    .catch(error => next(error))
})

module.exports.edit = ((req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
    .then( movie => {
      res.render('movies/edit.hbs', {movie})
    })
    .catch(error => next(error))
})

module.exports.doEdit = ((req, res, next) => {
  const id = req.params.id
  Movie.findByIdAndUpdate(id, req.body)
    .then( () => {
      res.redirect('/movies')
    })
    .catch(error => next(error))
})