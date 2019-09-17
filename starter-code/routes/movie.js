const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie");

/* GET home page */
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(moviesFromDB=>{
      res.render('movie-views/movies', {movies: moviesFromDB});
    })
    .catch(err => next(err))
});

router.post('/movies', (req, res, next) => {
  const newMovie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  });

  newMovie.save()
    .then(responseFromDB =>{
      res.redirect("/movies")
    })
    .catch(err =>{
      console.error("Error, creating movie", err);
      res.redirect("/movies/new")
    })
});

router.get('/movies/new', (req, res, next) => {
  res.render("movie-views/new")
});

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(resultFromDB => {
      res.render("movie-views/edit",{movie: resultFromDB})
    })
    .catch(err => next(err));
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(res.redirect("/movies"))
    .catch(err => next(err));
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movieFromDB => {
    res.render("movie-views/details", {movie: movieFromDB})
  })
  .catch(err => next(err))
});

router.post('/movies/:id', (req, res, next) => {
  const updatedMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.findByIdAndUpdate(req.params.id, updatedMovie)
  .then(resultFromDB => {
    res.redirect("/movies")
  })
  .catch(err => next(err))
});


module.exports = router;
