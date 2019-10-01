const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {

  Movie.find()
  .then( movies => {
    res.render('movies/index', { movies });
  })
  .catch( error => {
    console.log(error);
    next;
  });

});

router.post('/movies', (req, res, next) => {

  let { title, genre, plot } = req.body;

  const newMovie = new Movie({title, genre, plot});

  newMovie.save()
  .then( movie => {
    res.redirect('/movies');
  })
  .catch( error => {
    res.render('movies/new', {error});
  });

})

router.get('/movies/new', (req, res, next) => {

  res.render('movies/new');

})

router.get('/movies/:movieId', (req, res, next) => {

  let movieId = req.params.movieId;

  Movie.findById(movieId)
  .then( movie => {
    res.render('movies/show', { movie });
  })
  .catch( error => console.log(error) );

})

router.post('/movies/:movieId', (req, res, next) => {

  let movieId = req.params.movieId;

  let { title, genre, plot } = req.body

  Movie.update({_id: movieId}, {$set: {title, genre, plot}})
  .then( movie => {
    res.redirect('/movies');
  })
  .catch( error => {
    res.render('movies/edit', {error});
  })

});

router.post('/movies/:moviesId/delete', (req, res, next) => {
  
  let movieId = req.params.movieId;
  
  Movie.findByIdAndRemove(movieId)
  .then( movie => {
    let error = `Removed ${movie.title}`;
    console.log(error);
    res.redirect('/movies');
  })
  .catch( error => {
    console.log(error);
    res.render('movies/index', { error });
  })

})

router.get('/movies/:movieId/edit', (req, res, next) => {
  
  let movieId = req.params.movieId;

  Movie.findById(movieId)
  .then( movie => {
    res.render('movies/edit', { movie });
  })
  .catch( error => console.log(error) );

})

module.exports = router;