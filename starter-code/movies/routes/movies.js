const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render("movies/index", {movies});
  })
  .catch(err => {
    next(err);
  });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render("movies/show", {movie});
  })
  .catch(err => {
    next(err);
  });
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render("movies/edit", {movie});
  })
  .catch(err => {
    next(err);
  });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/movies");
  })
  .catch(err => {
    next(err);
  });
});

router.post("/movies", (req, res, next) => {
  const {title, genre, plot} = req.body;

  Movie.create({title, genre, plot})
  .then(() => {
    res.redirect("/movies");
  })
  .catch(err => {
    res.redirect("/movies/new");
  });
});

router.post("/movies/:id", (req, res, next) => {
  const {title, genre, plot} = req.body;

  Movie.findByIdAndUpdate(req.params.id, {title, genre, plot}, {runValidators: true})
  .then(() => {
    res.redirect("/movies");
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;