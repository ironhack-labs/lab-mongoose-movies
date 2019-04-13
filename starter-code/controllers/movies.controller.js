const createError = require('http-errors');
const mongoose    = require('mongoose');
const Movie       = require('../models/movie.model');

module.exports.list = (req, res, next) => {
  Movie.find()
    .then( movies => res.render('movies/index', {
      title: 'Movies List',
      movies
    }) )
    .catch( error => next(error) );
}

module.exports.details = (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then( movie => { 
      res.render( 'movies/show', { movie } )} )
    .catch( error => next(error) )
}

module.exports.create = (req, res, next) => { res.render('movies/new') }

module.exports.doCreate = (req, res, next) => {
  const movie = new Movie(req.body);

  movie.save()
    .then( () => res.redirect('index') )
    .catch( error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('movies/new', {movie, ...error} )
      }
      else {
        next(error)
      }
    } )
}

module.exports.delete = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Movie.findByIdAndRemove(id)
    .then( (movie) => { 
      if (movie) { res.redirect('/movies/index'); }
      else { next(createError(404, 'Movie Not Found')) }
    })
    .catch( error => next(error) )
}

module.exports.edit = (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then( movie => { 
      res.render( 'movies/edit', { movie } )} )
    .catch( error => next(error) )
}

module.exports.doEdit = (req, res, next) => {
  const id = req.params.id;

  Movie.findByIdAndUpdate(id, req.body, { new: true, runValidators: true})
    .then( movie => {
      if (movie) { res.redirect('/movies/index') }
      else {  next(createError(404, 'Movie not found')) }
    } )
    .catch( error => {
      if (error instanceof mongoose.Error.ValidationError) {
        const movie = new Movie({ ...req.body, _id: id })
        movie.isNew = false;
        res.render('movies/new', { movie, ...error })
      }
      else { next(error) }
    } )
}
