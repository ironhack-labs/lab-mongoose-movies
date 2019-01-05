const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies')



router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log(movies)
    res.render("movies/index", { movies });
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
});


router.get('/movies/show/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id': movieId})
  .then(movie => {
    console.log(movie)
    res.render("movies/show", { movie });
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
});



router.get('/movies/new', (req, res, next) => {
  res.render("movies/new");
});

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot, image } = req.body;
  const newMovie = new Movie({ title, genre, plot, image });
  newMovie.save()
  .then(movie => {
      res.redirect('/movies');
    })
    .catch(error => {
      console.log(error)
      res.redirect('/movies/new');
    })
});

router.post('/movies/:id/delete', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
  .then(movie => {
      res.redirect('/movies');
    })
    .catch(error => {
      console.log(error)
      res.redirect('/movies/new');
    })
});



router.get('/movies/:id/edit', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id': movieId})
  .then(movie => {
    console.log(movie)
    res.render('movies/edit', { movie });
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
});


router.post('/movies/:id', (req, res, next) => {
  const { title, genre, plot } = req.body;
  let movieId = req.params.id;
  Movie.findByIdAndUpdate({'_id': movieId},{ title, genre, plot } )
  .then(movie => {
      res.redirect('/movies');
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
});



module.exports = router;