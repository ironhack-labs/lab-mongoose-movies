const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/* GET Movies. */
router.get("/", (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) return next(err);

    res.render("./movies/index", {
      movies: movies
    });
  });
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;

  const movieInfo = {
    title: title,
    genre: genre,
    plot: plot
  };

  const movie = new Movie(movieInfo);

  movie.save(err => {
    if (err) return res.redirect("/movies/new");
    res.redirect("/movies/");
  });
});

router.get("/:id", (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) {
      return next(err);
    }
    res.render("movies/show", { movie: movie });
  });
});

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) return next(err);
    res.render("movies/edit", {
      title: "Edit " + movie.title,
      movie: movie
    });
  });
});

router.post("/:id/", (req, res, next) => {
  Movie.findOneAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    },
    (err, movie) => {
      if (err) next(err);
      res.redirect("movies/" + req.params.id);
    }
  );
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id, (err, movie) => {
    if (err) return next(err);
    res.redirect("/movies/");
  });
});

module.exports = router;
