const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  Movies.find()
    .then(allMovies => {
      res.render("movies/index", { allMovies });
    })
    .catch(() => {
      next();
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movies.findById({ _id: req.params.id })
    .then(foundMovie => {
      res.render("movies/show", { foundMovie });
    })
    .catch(() => {
      next();
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/movies/new", (req, res, next) => {
  Movies.create({
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  }).then(() => {
    res.render("/movies");
  })
  .catch(() => {
    next();
  });
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movies.find({ _id: req.params.id })
    .then(movieToEdit => {
      res.render("movies/edit", { movieToEdit });
    })
    .catch(() => {
      next();
    });
});

router.post("/movies/:id", (req, res, next) => {
  Movies.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/movies");
      })
    .catch(() => {
      next();
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movies.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => {
      next();
    });
});

module.exports = router;
