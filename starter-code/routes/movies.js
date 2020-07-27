const express = require('express');
const router  = express.Router();
const Movie = require('../model/Movie');

router.get('/', (req, res, next) => {
  Movie.find()
      .then( movie => {
          console.log('movies: ', movie)
          res.render('movies/index', {movie})
      })
      .catch( (err) => {
          next(err)
      })
});

router.get('/new', (req, res, next) => {
  res.render('movies/new')
});

router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  console.log(req.body);
  const newmovie = new Movie({ title, genre, plot});
  newmovie.save()
      .then( () => {
        res.redirect('/movies')
      })
      .catch( (err) => {
        console.log(err);
        res.redirect('/movies/new')
      })
  })

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
      .then( (movie) => {
        console.log(movie)
        res.render('movies/show', {movie})
      })
      .catch( (err) => {
        next(err)
      })
  });

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
      .then( (movie) => {
        console.log(movie)
        res.redirect('/movies')
      })
      .catch( (err) => {
        next(err)
      })
  });

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then( (movie) => {
      console.log(movie)
      res.render('movies/edit', {movie})
    })
    .catch( (err) => {
      next(err)
    })
});

router.post('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;
  const {title, genre, plot} = req.body
  Movie.update(
    { _id: movieId },
    { $set: { title, genre, plot } }
  )
  .then( (movie) => {
    res.redirect('/movies')
  })
  .catch( (err) => {
    next(err)
  })
});

module.exports = router;
