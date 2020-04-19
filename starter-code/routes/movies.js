const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');

/* GET show all movies */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMoviesFromDB => {
      console.log('All Movies: ', allMoviesFromDB);
      res.render('movies/index', {movies: allMoviesFromDB});
    })
    .catch(next);
});

/* GET new movie */
router.get('/movies/new', (req, res) => {
  res.render('movies/new');
});

/* GET movies ID */
router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
    .then(movieFromDB => {
      res.render('movies/show', {movie: movieFromDB});
    })
    .catch(next);
});

/* GET edit movie */
router.get('/movies/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
    .then(movie => {
      res.render('movies/edit', {movie});
    })
    .catch(next);
});

/* POST new movie */
router.post('/movies/new', (req, res) => {
  const { title, genre, plot } = req.body;
  
  const newMovie = new Movie({ title, genre, plot });

  newMovie.save() 
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => {
      console.log(err);
      res.redirect('movies/new');
    });

});

/* POST delete movie */

router.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(next);
});

/* POST edit movie */
router.post('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  const { title, genre, plot } = req.body;

  Movie.update({_id: movieId}, { $set: { title, genre, plot }})
    .then(() => {
      res.redirect('/movies');
    })
    .catch(next);
});

module.exports = router;