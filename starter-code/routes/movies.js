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
      if (movies.length > 1) moviesN = `${movies.length} movies`;
      else if (movies.length === 1) movies = `1 movie`;
      else moviesN = `No movies`;

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
router.get("/new", (req, res, next) =>
  res.render("movies/new", { navMovies: true })
);
router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  withDbConnection(async () => {
    try {
      await newMovie.save();
      res.redirect("/movies");
    } catch (error) {
      console.log(error);
      res.render("movies/new");
    }
  });
});

//delete movie

router.post("/:id/delete", (req, res, next) => {
  withDbConnection(async () => {
    try {
      const movie = await Movie.findById(req.params.id);
      await Movie.deleteOne(movie);
      res.redirect("/movies");
    } catch (error) {
      next();
      return error;
    }
  });
});

module.exports = router;