/*jshint esversion: 6 */

const express = require("express");
const router = express.Router();
const withDbConnection = require("./../withDbConnection");
const Movie = require("./../models/Movie");

/* GET movies */
router.get("/", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const movies = await Movie.find();
      res.render("movies/index", { movies });
    } catch (error) {
      next(error);
    }
  });
});

/* GET new */
router.get("/new", (req, res, next) => {
  withDbConnection(async () => {
    try {
      res.render("movies/new");
    } catch (error) {
      next(error);
    }
  });
});

/* GET edit */
router.get("/:id/edit", (req, res, next) => {
  withDbConnection(async () => {
    const movieId = req.params.id;
    try {
      const movies = await Movie.findById(movieId);
      res.render("movies/edit", { movies });
    } catch (error) {
      next(error);
    }
  });
});

/* POST new */
router.post("/", (req, res, next) => {
  const movieData = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  const newMovie = new Movie(movieData);

  withDbConnection(async () => {
    try {
      await newMovie.save();
      res.redirect("/movies");
    } catch (error) {
      next(error);
      res.render("movies/new");
    }
  });
});

/* POST delete id */
router.post("/:id/delete", (req, res, next) => {
  const movieId = req.params.id;

  withDbConnection(async () => {
    try {
      await Movie.findByIdAndRemove(movieId);
      res.redirect("/movies");
    } catch (error) {
      next(error);
      res.render("movies/new");
    }
  });
});

/* GET movie */
router.get("/:id", (req, res, next) => {
  withDbConnection(async () => {
    const movieId = req.params.id;
    try {
      const movie = await Movie.findById(movieId);
      res.render("movies/show", { movie });
    } catch (error) {
      next(error);
    }
  });
});

/* POST edit */
router.post("/:id", (req, res, next) => {
  const movieData = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  const movieId = req.params.id;
  withDbConnection(async () => {
    try {
      await Movie.findByIdAndUpdate(movieId, movieData);
      res.redirect("/movies");
    } catch (error) {
      next(error);
      res.render("movies/new");
    }
  });
});

module.exports = router;
