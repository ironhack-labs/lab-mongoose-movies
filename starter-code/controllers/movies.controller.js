const createError = require('http-errors');
const mongoose = require('mongoose');
const Movie = require('../models/movie.model');


module.exports.list = (req, res, next) => {
  console.log("Movies list")
  Movie.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(next);
};

module.exports.show = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      if (movie) {
        res.render('movies/show', { movie });
      } else {
        res.redirect('/movies');
      }
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  res.render('movies/new')};



module.exports.doCreate = (req, res, next) => {
    Movie.create(req.body)
      .then(movie => res.redirect(`/movies/${movie.id}`))
      .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('movies/show', { 
            errors: error.errors,
            post: req.body 
          });
        } else {
          next(error);
        }
      });
  };

  module.exports.edit = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
      if (movie) {
        console.log(movie)
        console.log(movie.title)
        res.render('movies/edit', { movie });
      } else {
        next(createError(404, 'movie does not exists'));
      }
    }).catch(next);
};
    

    module.exports.doEdit = (req, res, next) => {
      console.log("editant ////////////////////////////////////")
      Movie.findByIdAndUpdate(req.params.id, req.body)
        .then(movie => {
          if (movie) {
            //            res.render('movies/index', { movie });
            res.redirect('/movies');

          } else {
            next(createError(404, 'movie does not exists'));
          }
        }).catch(error => {
          if (error instanceof mongoose.Error.ValidationError) {
            res.render('movies/edit', { 
              errors: error.errors,
              movie: req.body 
            });
          } else {
            next(error);
          }
        });
    };


  module.exports.delete = (req, res, next) => {
    console.log(req.params.id)
    Movie.findByIdAndDelete(req.params.id)
    .then(movie => {
      if (movie) {
        res.redirect('/movies');
      } else {
        next(createError(404, 'movie does not exist'));
      }
    })
    .catch(next);
};