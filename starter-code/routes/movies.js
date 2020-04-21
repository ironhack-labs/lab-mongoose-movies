const express = require("express");
const router = express.Router();

// Iteration 8:
const Movie = require("../models/movie-model"); // movie-model.js

router.get("/movies", (request, response, next) => {
  Movie.find()
    .then((movieArray) => {
      console.log(movieArray);
      response.render("movies/index", { movieArray }); // with brackets
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// Iteration 9:

router.get("/movies/:movieId", (request, response, next) => {
  Movie.findById(request.params.movieId)
    .then((movieDetails) => {
      console.log(movieDetails);
      response.render("movies/show", movieDetails); // without brackets
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// Iteration 10:
router.get("/movies/new", (request, response) => {
  response.render("movies/new");
});

router.post("/movies/new", (request, response) => {
  const { title, genre, plot } = request.body; // referring to 'name' attributes in <form> in new.hbs
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then((movie) => {
      console.log(movie);
      response.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
      response.render("movies/new");
    });
});

// Iteration 11:
router.post("/movies/:movieId/delete", (request, response, next) => {
  Movie.findByIdAndRemove(request.params.movieId)
    .then((movie) => {
      console.log(movie);
      response.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// Iteration 12:
router.get("/movies/:movieId/edit", (request, response, next) => {
  Movie.findById(request.params.movieId)
    .then((movieDetails) => {
      console.log(movieDetails);
      response.render("movies/edit", movieDetails);
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

router.post("/movies/:movieId", (request, response, next) => {
  const { title, genre, plot } = request.body; // see also Iteration 4
  Movie.update(
    { _id: request.params.movieId },
    { $set: { title, genre, plot } },
    { new: true }
  )
    .then((movie) => {
      console.log(movie);
      response.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
      next();
    });
});

// has to be included, otherwise app.use() wouldn't recognize this .js
module.exports = router;
