const express = require("express");
const moviesRouter = express.Router();

const Movies = require("./../models/movie");

moviesRouter.get("/", (req, res) => {
  Movies.find({})
    .then((movies) => res.render("movies/index", { movies }))
    .catch((error) => console.log(error));
});

moviesRouter.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  Movies.findById(movieId)
    .then((movie) => res.render("movies/show", { movie }))
    .catch((err) => console.log(err));
});

module.exports = moviesRouter;
