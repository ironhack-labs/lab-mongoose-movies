const { request } = require("express");
const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();

router.get("/movies", (request, result, next) => {
  Movie.find({})
    .then((movies) => {
      result.render("movie/index", movies);
    })
    .catch((error) => {
      console.log("Error getting movies: ", error);
      next(error);
    });
});

router.get("/movies/new", (request, result, next) => {
  result.render("movie/new");
});

router.post("/movies/new", (request, result, next) => {
  Movie.create({
    title: request.body.title,
    genre: request.body.genre,
    plot: request.body.plot,
  })
    .then((movie) => {
      console.log(`New movie created: ${movie.title}`);
      result.redirect("/movies");
    })
    .catch((error) => {
      console.log("Error creating movie: ", error);
      next(error);
    });
});

router.get("/movies/:id", (request, result, next) => {
  Movie.findById(request.params.id)
    .then((movie) => {
      console.log(`Viewing movie: ${movie.title}`);
      result.render("movie/show", movie);
    })
    .catch((error) => {
      console.log("Error getting movie: ", error);
      next(error);
    });
});

router.post("/movies/:id", (request, result, next) => {
  Movie.findByIdAndUpdate(request.params.id, {
    title: request.body.title,
    genre: request.body.genre,
    plot: request.body.plot,
  })
    .then((movie) => {
      console.log(`Updated movie: ${movie.title}`);
      result.redirect(`/movies/${request.params.id}`);
    })
    .catch((error) => {
      console.log("Error updating movie: ", error);
      next(error);
    });
});

router.get("/movies/:id/edit", (request, result, next) => {
  Movie.findById(request.params.id)
    .then((movie) => {
      console.log(`Editing movie: ${movie.title}`);
      result.render("movie/edit", movie);
    })
    .catch((error) => {
      console.log("Error getting movie: ", error);
      next(error);
    });
});

router.post("/movies/:id/delete", (request, result, next) => {
  Movie.findByIdAndDelete(request.params.id)
    .then((movie) => {
      console.log(`Deleted movie: ${movie.title}`);
      result.redirect("/movies");
    })
    .catch((error) => {
      console.log("Error deleting movie: ", error);
      next(error);
    });
});

module.exports = router;
