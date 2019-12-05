const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// Locate the /movies GET route in routes/movies.js.
router.get("/", (req, res, next) => {
  // In the route callback:
  // Call the Movie model's find method to retrieve all the movies.
  Movie.find()
    // If there isn't an error, render the movies/index view.
    // Pass the array of movies into the view as a variable.
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
