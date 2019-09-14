const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");

/**
 * /movies
 * GET
 * Show all movies
 */

router.get("/movies", (req, res, next) => {
  Movies.find()
    .select({ title: 1, imageUrl: 1 })
    .sort({ title: 1 })
    .then(movies => {
      res.render("movies/index", { movies });
    });
});

/**
 * /movies/new
 * GET
 * Show a form to create a movie
 */

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

/**
 * /movies:id
 * GET
 * Show a specific movie
 */

router.get("/movies/:id", (req, res, next) => {
  Movies.findById(req.params.id).then(movie => {
    res.render("movies/movie", { movie, host: process.env.HOST });
  });
});

/**
 * /movies/:id/delete
 * POST
 * Delete a specific movie
 */

router.post("/movies/:id/delete", (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
    .then(deletedMovie => {
      res.redirect("/movies");
    })
    .catch(error => {
      next(error);
    });
});

/**
 * /movies
 * POST
 * Send the data from the form to this route to create the movie and save to the database
 */

router.post("/movies", (req, res, next) => {
  const genre = req.body.genre.split(",");

  const newMovie = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    genre: genre,
    plot: req.body.plot
  };

  Movies.create(newMovie)
    .then(createdMovies => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
      res.render("movies/new");
    });
});

/**
 * /movies/:id/edit
 * GET
 * Show a form to edit a movie
 */

router.get("/movies/:id/edit", (req, res, next) => {
  Movies.findByIdAndUpdate(req.params.id)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(error => next(error));
});

/**
 * /movies/:id/edit
 * GET
 * Show a form to edit a movie
 */

router.get("/movies/:id/edit", (req, res, next) => {
  Movies.findByIdAndUpdate(req.params.id)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(error => next(error));
});

/**
 * /movies/:id
 * POST
 * Send the data from the form to this route to update and save the movie from the database
 */

router.post("/movies/:id", (req, res) => {
  const movieToUpdate = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movies.findByIdAndUpdate(req.params.id, movieToUpdate, { new: true })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => next(error));
});

module.exports = router;
