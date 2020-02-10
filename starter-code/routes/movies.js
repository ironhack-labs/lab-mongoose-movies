const express = require("express");
const moviesRouter = express.Router();

const Movie = require("./../models/Movie");

moviesRouter.get("/", (req, res, next) => {
  Movie.find()
    .then( (moviesArr) => {
      const data = {movies: moviesArr};
      res.render("movies/index", data);
    })
    .catch( (err) => console.log(err));
});

moviesRouter.get("/:movieId", (req, res, index) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .then( (movie) => {
      const data = {movie: movie};
      res.render("movies/show", data);
    })
    .catch( (err) => console.log(err));
});

moviesRouter.get("/new", (req, res) => {
  res.render("movies/new");
});

moviesRouter.post("/new", (req, res) => {
  const {title, genre, plot} = req.body;
  Movie.create({title, genre, plot})
  .then((movie) => {
    res.redirect("/movies")
  })
  .catch( (err) => {
    res.render("movies/new");
  })
});

moviesRouter.post("/:movieId/delete", (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findByIdAndDelete(movieId)
    .then( (movie) => {
      res.redirect("/movies");
    })
    .catch( (err) => next(err));
});

module.exports = moviesRouter;