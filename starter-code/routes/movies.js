const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/* Listing movies */
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(moviesAll => {
      res.render("movies/index", { moviesAll });
    })
    .catch(error => {
      next(error);
    });
});

//Adding New Movies
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/movies/new", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(movieDoc => {
      res.redirect("/movies");
    })
    .catch(error => {
      res.render("/movies/new");
    });
});

//Deleting Movies
router.post("/movies/:id/delete", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndRemove({ _id: movieId })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      next(error);
    });
});

//Editing Movies
router.get("/movies/edit/:id", (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(movieEdit => {
      res.render("movies/edit", { movieEdit });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/movies/edit/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: req.params.id },
    { $set: { title, genre, plot } },
    { new: true }
  )
    .then(movie => {
      res.redirect("/movies" + req.params.id);
    })
    .catch(error => {
      next(error);
    });
});

//The movie Details Page
router.get("/movies/:id", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({ _id: movieId })
    .then(movieDetail => {
      res.render("movies/show", { movieDetail });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
