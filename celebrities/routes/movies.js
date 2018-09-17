const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(e => console.log(e));
});

router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/show", { movie });
    })
    .catch(next);
});

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(next);
});

router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Movie.findByIdAndUpdate(req.params.id, {
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
    .then(movie => {
      let stringId = encodeURIComponent(movie._id);
      res.redirect("/movies/" + stringId);
    })
    .catch(next);
});

router.post("/:id/delete", (req, res, next) => {
  const { movieId } = req.body;
  Movie.findByIdAndRemove(movieId)
    .then(deleted => {
      res.redirect("/movies");
    })
    .catch(next);
});

module.exports = router;
