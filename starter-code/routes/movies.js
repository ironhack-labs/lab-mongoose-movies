const express = require("express");
const moviesRouter = express.Router();
const Movie = require("./../models/movie");

moviesRouter.get("/", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      const data = {
        allMovies: allMovies,
      };
      console.log(allMovies);
      res.render("movies/index", data);
    })
    .catch((err) => console.log(err));
});

moviesRouter.get("/new", (req, res, next) => {
  res.render("movies/new");
});

moviesRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .then((oneMovie) => {
      const data = {
        oneMovie: oneMovie,
      };
      res.render("movies/show", data);
    })
    .catch((err) => console.log(err));
});

moviesRouter.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then((createdMovie) => {
      res.redirect("/");
    })
    .catch((err) => res.render("movies/new", data));
});

moviesRouter.post("/:movieId/delete", (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findByIdAndRemove(movieId)
    .then((removedMovie) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = moviesRouter;
