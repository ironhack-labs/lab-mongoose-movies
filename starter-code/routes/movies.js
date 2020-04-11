const express = require("express");
const moviesRouter = express.Router();

const Movie = require("./../models/movie");

moviesRouter.get("/", (req, res) => {
  Movie.find({})
    .then((movies) => res.render("movies/index", { movies }))
    .catch((error) => console.log(error));
});

moviesRouter.get("/new", (req, res) => {
  res.render("movies/new");
});

moviesRouter.post("/", (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(() => res.redirect("/movies"))
    .catch((err) => {
      res.redirect("/movies/new");
      console.log(err);
    });
});

moviesRouter.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId)
    .then((movie) => res.render("movies/show", { movie }))
    .catch((err) => console.log(err));
});

moviesRouter.post("/:movieId/delete", (req, res, next) => {
  const movieId = req.params.moviesId;
  Movie.findByIdAndRemove(movieId)
    .then((data) => res.redirect("/movies"))
    .catch((err) => console.log(err));
});

moviesRouter.get("/:movieId/edit", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById({ _id: movieId })
    .then((movie) => res.render("movies/edit", { movie }))
    .catch((err) => console.log(err));
});

moviesRouter.post("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: movieId },
    { $set: { title, genre, plot } },
    { new: true }
  )
    .then(res.redirect("/movies"))
    .catch((err) => console.log(err));
});

module.exports = moviesRouter;
