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

module.exports = router;
