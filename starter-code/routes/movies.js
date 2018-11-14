const express = require("express");
const router = express.Router();

// Call the model on the router file
const Movie = require("../models/movie-model.js");

// Route to the list of movies 
router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(movieResults => {
    res.locals.moviesArray = movieResults;
    res.render("movies/index.hbs")
  })
  .catch(err => next(err));
});


// Add a movie
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new.hbs");
});

// Process to the creation of the movie
router.post("/movies/process-add", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(movieDoc => {
      res.redirect("/movies");
    })
    .catch(err => next(err));
});

// Show movie details on a single page
router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movies/show.hbs");
    })
    .catch(err => next(err));
});

// Delete a movie
router.post("/movies/:movieId/delete", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findByIdAndRemove(movieId)
    .then(movieDoc => {
      res.redirect("/movies");
    })
    .catch(err => next(err));
});

// Route towards the edit page
router.get("/movies/:movieId/edit", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movies/edit.hbs");
    })
    .catch(err => next(err));
});


// Post route to process the editing
router.post("/movies/:movieId/edit-process", (req, res, next) => {
  const { movieId } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(
    movieId,
    { $set: { title, genre, plot } },
    { runValidators: true },
  )
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.redirect(`/movies/${movieId}`);
    })
    .catch(err => next(err));
});


module.exports = router;