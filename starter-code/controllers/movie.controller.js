const Movies = require('../models/movie.model');
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {
  Movies.find()
  .then((allMovies)=> {
    res.render('movies/index', {allMovies})
  })
  .catch(error=>next(error))
}

module.exports.details = (req, res, next) => {
  Movies.findById(req.params.id)
  .then((movie)=> {
    res.render('movies/show', {movie})
  })
  .catch((error)=>next(error))
}

module.exports.add = (req, res, next) => {
  res.render('movies/new')
}

module.exports.doAdd = (req, res, next) => {
  const movie = new Movies(req.body)
  movie.save()
  .then(() => res.redirect('/movies'))
  .catch((error) => {
    if (error instanceof mongoose.Error.ValidationError) {
      console.log(error)
      res.render('movies/new', {movie, error})
    } else {
      next(error)
    }
  });
}

module.exports.delete = (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/movies')
  })
  .catch((error)=> next(error))
}

module.exports.edit = (req, res, next) => {
  Movies.findById(req.params.id)
  .then((movie) => {
    res.render('movies/edit', {movie})
  })
  .catch((error)=>next(error))
}

module.exports.doEdit = (req, res, next) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
  .then(() => res.redirect('/movies'))
  .catch((error) => {
    if (error instanceof mongoose.Error.ValidationError) {
      console.log(error)
      res.render('movies/edit', {movie, error})
    } else {
      next(error)
    }
  });  
}