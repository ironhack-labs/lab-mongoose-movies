/* jshint esversion: 9*/
const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

// GET METHODS:
// index page
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMoviesFromDB => {
      res.render('movies', { allMovies: allMoviesFromDB });
    })
    .catch(error => {
      next(error);
    });
});

// add movie page
router.get('/movies/new-movie', (req, res, next) => {
  res.render('movies/new-movie', {title: "Add A New Movie"});
});

// movie deatails page
router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => {
      res.render('movies/movie-details', { movie });
    })
    .catch(error => {
      next(error);
    });
});

// router.get('/celebrities/:id/edit',(req, res, next) => {
//   const movieId = req.params.id;
//   Movie.findById(movieId)
//     .then(movie => {
//       res.render('movies/edit-movie', { movie });
//     }).catch(error => {
//       next(error);
//     });
// });

// edit movie page
router.get('/movies/:id/edit',(req, res, next) => {
  const movieId = req.params.id;
  console.log('movieid', movieId);
  Movie.findById(movieId)
    .then(movie => {
      res.render('movies/edit-movie', {
        title: `Edit ${movie.title}`,
        movie: movie
      });
    }).catch(error => {
      next(error);
    });
});


// POST METHODS:
// add movie
router.post('/movies', (req, res, next) => {
  const { title, genre, plot/* , cast */ } = req.body;

  const newMovie = new Movie({ title, genre, plot/* , cast */ });

  newMovie.save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
});

// delete movie
router.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then(movie => {
      res.redirect('/movies');
    })
    .catch(error => {
      next(error);
    });
});

// update movie
router.post('/movies/:id', (req, res, next) => {
  const { title, genre, plot/* , cast */ } = req.body;
  
  const movieId = {_id: req.params.id};
  Movie.update(movieId, { $set: { title, genre, plot/* , cast */ }})
    .then(() => {
      res.redirect('/movies');
    });
});

module.exports = router;