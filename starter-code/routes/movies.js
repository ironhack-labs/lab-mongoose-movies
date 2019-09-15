
const express = require("express");
const router = express.Router();
const Movie = require("../models/movies.js");

router.get("/", (req, res, next) => {
  Movie.find({})
    .then(allMovies =>
      res.render("movies/index", { movies: allMovies })
    )
    .catch(function () {
      next();
      throw new Error("There's an error!");
    });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDetail =>
      res.render("movies/show", { movie: movieDetail })
    )
    .catch(function () {
      next();
      throw new Error("There's an error!");
    });
});

router.get("/new", (req, res, next) => res.render("movies/new"));
router.post("/new", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(() => res.redirect("/movies"))
    .catch(function () {
      next();
      throw new Error("There's an error!");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(deletedMovie => res.redirect("/movies"))
    .catch(function () {
      next();
      throw new Error("There's an error!");
    });
});

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDetail =>
      res.render("movies/edit", { movie: movieDetail })
    )
    .catch(function () {
      next();
      throw new Error("There's an error!");
    });
});

router.post("/:id/edit", (req, res) => {
  Movie.findByIdAndUpdate(req.body._id, req.body).then(updatedMovie => {
    res.redirect("/movies");
  });
});

module.exports = router;
