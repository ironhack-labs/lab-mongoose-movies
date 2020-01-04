const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Movie.find().then(movies => {
    res.render("movies/index", { movies });
  });
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(() => {
      res.redirect(
        "movies/new",
        alert("La película no se ha creado correctamente")
      );
    });
});

router.get("/:moviesId", (req, res, next) => {
  Movie.findById(req.params.moviesId).then(movie => {
    res.render("movies/show", movie);
  });
});

router.get("/:moviesId/edit", (req, res, next) => {
  Movie.findById(req.params.moviesId).then(movie => {
    res.render("movies/edit", { movie });
  });
});

router.post("/:moviesId/edit", (req, res, next) => {
  Movie.findOneAndUpdate(req.params.moviesId, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }).then(movie => {
    res.redirect("/movies/" + movie._id);
  });
});

router.post("/:moviesId/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.moviesId).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
