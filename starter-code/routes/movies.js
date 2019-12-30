const express = require("express");
const Movie = require("../models/movie.js");
const router = express.Router();

// Iteration 8:
// Listing Movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieResult => {
      res.locals.movieArray = movieResult;
      res.render("movies/index");
    })
    .catch(err => next(err));
});

//(ORDER MATTERS WITH SIMILAR URLS!!!)
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

//Iteration 9:
//Getting info for one Movie
router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movies/show");
    })
    .catch(err => next(err));
});

//Iteration 10
//Adding a new movie
router.post("/addmovie", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(movieDoc => {
      //redirect if SUCESSFUL
      //redirect to avoid duplicating data
      //redirect =! render
      //only redirect to URL /celebrities/index instead of index.hbs
      res.redirect("/movies");
    })
    .catch(err => next(err));
});

//Iteration 11
//Deleting a Movie
router.post("/movies/:movieId/delete", (req, res, next) => {
  // res.send(req.params);
  const { movieId } = req.params;
  Movie.findByIdAndRemove(movieId)
    .then(movieDoc => {
      res.redirect("/movies");
    })
    .catch(err => next(err));
});

//Iteration 12
//EDIT or Update a movie
router.get("/movies/:movieId/edit", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movies/edit");
    })
    .catch(err => next(err));
});

router.post("/movies/:movieId/updateedit", (req, res, next) => {
  const { movieId } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(
    movieId, // ID of the document to UPDATE
    { $set: { title, genre, plot } }, // changes to be made
    { runValidators: true } //additional settings
  )
    .then(movieDoc => {
      res.redirect(`/movies/${movieId}`);
    })
    .catch(err => next(err));
});
module.exports = router;
