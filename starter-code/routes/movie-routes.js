const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

//1. Iteration #8: Listing Our Movies
// Get /movies route
router.get('/movies', (req, res) => {
  Movie.find()
    .then(moviesFromDB => {
      //   console.log('moviesFromDB: ', moviesFromDB);
      res.render('movie-views/movies', { moviesFromDB });
    })
    .catch(err => console.log(`Error while getting movies from DB: ${err}`));
});

//2. Iteration #9: The Movie Details Page
// Get /movie-details route
router.get('/movie-details', (req, res) => {
  //   console.log(req.query);
  Movie.findById(req.query.movies_id)
    .then(gotTheMovie => {
      res.render('movie-views/movie-details', { gotTheMovie });
    })
    .catch(err => console.log(`Error while looking for the req movie: ${err}`));
});

//3. Iteration #10: Adding New Movies
// Get the /add movie route - to add we need to render form and then request
router.get('/add-movie', (req, res) => {
  res.render('movie-views/add-movie-form');
});

//4.
//POST the movie - to mongoDB
router.post('/add-movie', (req, res) => {
  Movie.create(req.body)
    .then(savedMovie => {
      console.log('savedMovie: ', savedMovie);
      res.redirect(`/movie-details?movies_id=${savedMovie._id}`);
    })
    .catch(err => console.log(`Error while trying to save your movie: ${err}`));
});

//5. Iteration #11: Deleting Movies
router.post('/movie-details', (req, res) => {
  console.log(req.query);
  Movie.findByIdAndDelete(req.query.movie_id)
    .then(data => {
      // console.log(`The Movie successfully deleted`)
      res.redirect('/movies');
    })
    .catch(err => console.log('error: ', err));
});

//6. Iteration #12 (Bonus): Editing Movies
router.get('/movie-edit', (req, res) => {
  //   console.log(req.query.movie_id);
  Movie.findById(req.query.movie_id)
    .then(reqMovie => {
      res.render('movie-views/movie-edit-form', { theMovie: reqMovie });
    })
    .catch(err => console.log(err));
});
//POST received form
router.post('/movie-edit', (req, res) => {
  //   console.log(req.query.movie_id);
  Movie.findByIdAndUpdate(req.query.movie_id, req.body)
    .then(updatedMovies => {
      res.redirect('/movies');
    })
    .catch(err => console.log('error while trying to delete: ', err));
});

module.exports = router;
