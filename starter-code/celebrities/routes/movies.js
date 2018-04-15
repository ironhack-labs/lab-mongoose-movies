const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find().then(movies => {
    res.render("movies", { movies });
  });
});

router.get("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id).then(( movie) => {
    res.redirect("/movies");
    });
});

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("edit-movies", movie);
  });
});

router.post("/:id/edit", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const updates = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates).then(movie => {
    res.redirect("/movie-detail");
  });
});

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  Movie.findById(req.params.id).then(movie => {
    res.render("movie-detail", movie);
  });
});

module.exports = router;
