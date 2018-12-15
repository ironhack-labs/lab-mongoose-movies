const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(movie => {
        res.render("movies/index", { movie });
      })
      .catch(error => {
        res.render("index");
      })
  });

  router.get('/movies/news', (req, res, next) => {
    res.render("movies/news")
  })

  router.post('/movies/news', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot })
    newMovie.save()
    .then(movie => {
      res.redirect('/movies')
    })
    .catch((error) => {
      console.log(error)
    })
  });

  router.get('/movies/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
      .then(movie => {
        res.render("movies/id", { movie })
      })
      .catch(error => {
        console.log(error)
      })
  });

  router.post('/movies/:id/delete', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findByIdAndRemove({'_id': movieId})
    .then(movie => {
      res.redirect('/movies')
    })
    .catch((error) => {
      console.log(error)
    })
  });

  router.get('/movies/:id/edit', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
      .then(movie => {
        res.render("movies/edit", { movie })
      })
      .catch(error => {
        console.log(error)
      })
  });

  router.post('/movies/:id/edit', (req, res, next) => {
     let movieId = req.params.id;
     const { title, genre, plot } = req.body;
    Movie.update({'_id': movieId},{ $set: { title, genre, plot } })
      .then(movie => {
        res.redirect('/movies')
      })
       .catch(error => {
         console.log(error)
       })
   });



  module.exports = router;