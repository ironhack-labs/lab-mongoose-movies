const express = require("express");
const router = express.Router();
const withDbConnection = require("./../withDbConnection");
const Movie = require("./../models/movie");

//list the movies
router.get("/", (req, res, next) => {
  withDbConnection(async () => {
    try {
      let movies = await Movie.find();

      let moviesN;
      if (movies.length > 1) moviesN = `There are ${movies.length} movies`;
      else if (movies.length === 1) moviesN = `There is 1 movie`;
      else moviesN = `There are no movies`;

      res.render("movies/index", {
        movies,
        moviesN,
        navMovies: true
      });
    } catch (error) {
      next();
      return error;
    }
  });
});

//movie details
router.get("/:id", (req, res, next) => {
  withDbConnection(async () => {
    try {
      let movie = await Movie.findById(req.params.id);
      res.render("movies/show", { movie, navMovies: true });
    } catch (error) {
      next();
      return error;
    }
  });
});

module.exports = router;
