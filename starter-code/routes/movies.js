const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie')

router.get('/movies', (req, res, next) => {
    Movie.find({})
      .then(list => {
        console.log('encuentra las movies');
        console.log(list)
        res.render('movies/index', {list});
      })
      .catch(err => {
        res.redirect('/index')
      });
  });
  router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
  });

  router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movie => {
        res.render('movies/movie', {movie});
      })
      .catch(err => next(err));
  });
  
  router.post('/movies/new', (req, res, next) => {
  
    let movie = new Movie();
    movie.title= req.body.title;
    movie.genre = req.body.genre;
    movie.plot = req.body.plot;
  
    movie.save()
      .then(() => {
        res.redirect('/movies')
      })
      .catch(() => {
        res.redirect('/movies/new')
      });
  
  });
  
  router.post('/movies/:id/delete', (req, res, next) => {
  
    Movie.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect('/movies')
      })
      .catch(err => next(err));
  
  });

  router.get('/edit/:id', (req, res, next) => {
    Movie.findById(req.params.id )
    .then(movie =>{
      res.render('movies/edit',{movie});
    });
  });
  
  module.exports = router;