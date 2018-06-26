const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
    Movie.find()
      .then(movie => {
        res.render("movies/index" , {movie});
      })
      .catch(error => {
        console.log(error)
        next();
      })
  });

  router.get('/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
      .then(movie => {
        res.render("movies/show", {movie});
      })
      .catch(error => {
        console.log(error)
        next();
      })
  });

  router.get('/new', (req, res, next) => {
    res.render("movies/new")
  });

  router.post('/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({title, genre, plot});
    newMovie.save()
    .then((movie) => {
      res.redirect('/')
    })
    .catch((error) => {
      console.log(error)
      next();
    })
  });

  router.post('/:id/delete', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findByIdAndRemove({'_id':movieId})
      .then((movie) => {
        res.redirect('/movies')
      })
      .catch((error) => {
        console.log(error)
        next();
      })
    });

    router.get('/:id/edit', (req, res, next) => {
      let movieId = req.params.id;
      Movie.findOne({'_id': movieId})
        .then(movie => {
          res.render("movies/edit", {movie});
        })
        .catch(error => {
          console.log(error)
          next();
        })
    });

    router.post('/:id', (req, res, next) => {
      const { title, genre, plot } = req.body;
      Movie.update({_id: req.params.id}, { $set: { title, genre, plot }})
        .then((movie) => {
          res.redirect('/movies')
        })
        .catch((error) => {
          console.log(error)
          next();
        })
      });

module.exports = router;