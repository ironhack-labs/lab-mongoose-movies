const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      return next(err);
    }
    res.render('movies/index', {
      movies: movies
    })
  })
 });

 router.get('/new', (req, res, next) => {
  res.render('movies/new');
 });

 router.post('/', (req, res, next) => {
  const movieInfo = {
    title  : req.body.title,
    genre  : req.body.genre,
    plot   : req.body.plot
  }

  const newMovie = new Movie(movieInfo);

  newMovie.save(err => {
    if (err) {return next(err)}
    return res.redirect('/movies');
  }) 
})

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndRemove(id, (err, data) => {
    if (err) {
      return next(err);
    }
  })
  return res.redirect('/movies')
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id, (err, movie) => {
    res.render('movies/edit', {
      movie: movie
    })
  })
})

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  const movieData = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.update({_id: id}, movieData, (err, response) => {
    if (err) {
      return next(err);
    }
  });
  return res.redirect('/movies/' + id);
})

 router.get('/:id', (req, res, next) => {
   let id = req.params.id;
   Movie.findById(id, (err, movie) => {
     if (err) {
       return next(err);
     }
     res.render('movies/show', {
       movie: movie
     });
   });
 });

 module.exports = router;