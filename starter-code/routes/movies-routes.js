const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js'); 


router.get('/movies/new', (req, res, next) => {
  res.render('movies/new-movie')
})

router.post('/movies/create', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({title, genre, plot});
  newMovie.save()
  .then(() => {
    res.redirect('/movies');
  })
  .catch(error => {
    res.render('movies/new-movie')
  });
});

router.get('/movies', (req, res, next) => {
  // res.send('Hello movies')
  Movie.find()
  .then(allMoviesFromDB => {
    res.render('movies/movies', {allMovies: allMoviesFromDB})
  })
  .catch(error => {
    next(error)
  })
})

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById({'_id': req.params.movieId})
  .then(theMovie => {
    res.render('movies/movie-details.hbs', { movie: theMovie})
  })
  .catch(error => {
    next(error)
  })
})

router.post('/movies/:id/delete', (req, res, next) => {
  let id = req.body.name
  console.log(id)
  Movie.findByIdAndRemove({'_id': id})
  .then(()=> {
    res.redirect('/movies');
  })
  .catch(error => {
    next(error)
  })
})

module.exports = router;