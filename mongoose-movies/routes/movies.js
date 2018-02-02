const express = require('express');
const Movie = require('../models/movie');

const router  = express.Router();

router.get('/movies', (req, res, next) => {
    Movie.find({}, (err, movies) => {
        if (err) { return next(err); }
    
        res.render('movies/index', {
          movies: movies
        });
      });
});

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
});

router.get('/movies/:id/edit', (req, res, next) => {
    const movieId = req.params.id
    Movie.findById(movieId, (err, movies) => {
      if (err) { 
          return next(err);
         }
      res.render('movies/edit', {
        movies: movies
      });
    });
  })

router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id
  
    Movie.findById(movieId, (err, movies) => {
        if (err) { 
            return next(err); 
        }
  
        res.render('movies/show', {
          movies: movies
        });
      });
  });


router.post('/movies', (req, res, next) => {
    let newMovie = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
  
    let movie = new Movie(newMovie)
    movie.save((err, docs) => {
      if (err) {
        next(err)
      }
      else {
        res.redirect('/movies')
    }
    })
  });

  router.post('/movies/:id/delete', (req, res, next) => {
    const movieId = req.params.id
    Movie.findByIdAndRemove(movieId, (err, movies) => {
      if (err) {
        return next(err);
      }
  
      res.redirect('/movies');
    });
  })

  router.post('/movies/:id', (req, res, next) => {
    let updatedMovie = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
    let movieIDtoUpdate = req.params.id
    Movie.findByIdAndUpdate(
      movieIDtoUpdate,
      updatedMovie,
      (err, data) => {
      if (err) {
        next()
      }
      res.redirect('/movies')
    })
  })

module.exports = router;