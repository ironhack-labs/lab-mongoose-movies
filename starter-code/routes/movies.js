const express = require("express");
const router = express.Router();
const Movie = require("../models/Movies");

/* GET movies page */
router.get("/movies", async function (req, res, next) {
  try {
    const moviesDocuments = await Movie.find();
    res.render("movies/movies", { movies: moviesDocuments });
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

module.exports = router;
