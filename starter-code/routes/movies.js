const express = require("express");
const router = express.Router();
const Movie = require("../models/Movies");

/* GET movies page */
router.get("/movies/index", async function (req, res, next) {
  try {
    const moviesDocuments = await Movie.find();
    res.render("movies/index", { movies: moviesDocuments });
  } catch (err) {
    next(err);
  }
});

router.get("/movies/new", function (req, res, next) {
  res.render("movies/new");
});

router.post("/movies", async function (req, res, next) {
  try {
    const newMovie = req.body;
    await Movie.create(newMovie);
    res.redirect("/movies/index");
  } catch (err) {
    next(err);
  }
});

router.get("/movies/:id", async function (req, res, next) {
  try {
    const movieDocument = await Movie.findById(req.params.id);
    res.render("movies/details", { movie: movieDocument });
  } catch (err) {
    next(err);
  }
});

router.get("/movies/delete/:id", async function (req, res, next) {
    try {
      console.log(req.params.id);
      await Movie.findByIdAndDelete(req.params.id);
      res.redirect("/movies/index");
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
