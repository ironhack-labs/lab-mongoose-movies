const express = require("express");
const router = express.Router();

const Movie = require("../models/movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((allMovies) => res.render("movies/index", { allMovies }))
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
    .then((movie) => res.render("movies/show", movie))
    .catch((err) => next(err));
});

router.get("/new", (req, res, next) => {
  res.render("movie/new");
});

router.post("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot,
  })
    .then((newMovie) => {
      console.log("new movie created", newMovie);
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("Error creating new movie", err);
      res.redirect("/movies/new");
    });
});

router.post("/:id/delete", (req, res, next) => {
  const id = req.params.id;
  MOvie.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => console.error("Error deleting the movie", err));
});

module.exports = router;
