const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", {
        movies: movies
      });
    })
    .catch(next);
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }).then(createdMovie => {
    console.log(`The movie ${createdMovie.name} was created`);
    res.redirect("/movies");
  });
});

router.get("/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieFromDb => {
      res.render("movies/show", {
        movie: movieFromDb
      });
    })
    .catch(next);
});

router.get("/:movieId/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then(deletedMovie => {
      res.redirect("/movies");
    })
    .catch(next);
});

router.get("/:movieId/edit", (req, res, next) => {
  Movie.findById(req.params.movieId).then(movieFromDb => {
    res.render("movies/edit", {
      movie: movieFromDb
    });
  });
});

router.post("/:movieId/edit", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.movieId, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(next);
});

module.exports = router;
