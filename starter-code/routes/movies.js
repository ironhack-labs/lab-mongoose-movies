const express = require('express');
const router  = express.Router();

const Movie = require('./../models/Movie');

// ITERATION 2 - GET /celebrities
router.get('/', (req, res, next) => {
  Movie.find()
    .then( (allMovies) => {
      res.render('movies/index', {allMovies});
    })
    .catch( (err) => console.log('Error ocurred:', err));
})

// ITERATION 4 - Adding New movies
//GET /movies/new
router.get('/new', (req, res, next) => {
  res.render('movies/new');
})

// POST data from the form
router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  newMovie.save()
    .then(newItem => {
      if (newMovie.name != "" || newMovie.occupation != "" || newMovie.catchPhrase != "") {
        res.redirect('/movies');
      } else {
        res.redirect('/movies/new');
      }
    })
    .catch( (err) => res.redirect('/movies/new'));
})

// ITERATION 3 - GET /celebrities/id
router.get('/:_id', (req, res, next) => {
  const movieId = req.params;
  Movie.findById(movieId)
    .then((movie) => {
      res.render('movies/show', {movie});
    })
    .catch((err) => console.log("There's been an error loading the celebrity", err));
});

// ITERATION 5 - POST celebrities/:id/delete
router.post('/:_id/delete', (req, res, next) => {
  const movieId = req.params
  
  Movie.findByIdAndDelete(movieId)
    .then(() => {
      console.log('Movie deleted successfuly');
      res.redirect('/movies');
    })
})



module.exports = router;