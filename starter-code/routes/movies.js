const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(err => next(err));
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }).then(res.redirect('/movies/'))
  .catch(res.redirect('/movies/new'))});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/show", { movie });
    })
    .catch(err => next(err));
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(res.redirect("/movies"))
  .catch(err => next(err));
});

module.exports = router;
