const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

//1.Get /movies route
router.get('/movies', (req, res) => {
  Movie.find()
    .then(moviesFromDB => {
      //   console.log('moviesFromDB: ', moviesFromDB);
      res.render('movie-views/movies', { moviesFromDB });
    })
    .catch(err => console.log(`Error while getting movies from DB: ${err}`));
});

//2.Get /movie-details route
router.get('/movie-details', (req, res) => {
  //   console.log(req.query);
  Movie.findById(req.query.movies_id)
    .then(gotTheMovie => {
      res.render('movie-views/movie-details', { gotTheMovie });
    })
    .catch(err => console.log(`Error while looking for the req movie: ${err}`));
});

//3.Get the /add movie route - to add we need to render form and then request
router.get('/add-movie', (req, res) => {
  res.render('movie-views/add-movie-form');
});
//4.POST the movie - to mongoDB
router.post('/add-movie', (req, res) => {
  Movie.create(req.body)
    .then(savedMovie => {
      console.log('savedMovie: ', savedMovie);
      res.redirect(`/movie-details?movies_id=${savedMovie._id}`);
    })
    .catch(err => console.log(`Error while trying to save your movie: ${err}`));
});

module.exports = router;
