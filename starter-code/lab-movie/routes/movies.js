const express = require("express");
const Movie = require("../models/movie");

const router = express.Router();

//INDEX
router.get("/", (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      return next(err);
    }
    res.render("movies/index", {
      title: "All movies",
      movies: movies
    });
  });
});

//ADD
router.get("/new", (req, res, next) => {
  res.render("movies/new", {
    title: "Add new movie"
  });
});

router.post("/", (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const newMovie = new Movie(movieInfo);
  newMovie.save(err => {
    if (err) {
      return next(err);
    }
    return res.redirect("/movies");
  });
});

//SHOW
router.get("/:id", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId, (err, movie) => {
    if (err) {
      return next(err);
    }
    res.render("movies/show", {
      title: "Movie show",
      movie: movie
    });
  });
});

//DELETE
router.post("/:id/delete", (req, res, next) => {
  const id = req.params.id;

  Movie.findByIdAndRemove(id, (err, movie) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/movies");
  });
});

//EDIT
router.get("/:id/edit", (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) {
      return next(err);
    }
    res.render("movies/edit", {
      title: "Update movie",
      movie: movie
    });
  });
});

router.post("/:id", (req, res, next) => {
  const MovieId = req.params.id;

  const updates = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.findByIdAndUpdate(MovieId, updates, (err, movie) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/movies");
  });
});

module.exports = router;
