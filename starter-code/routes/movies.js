const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js");

router.get("/", (req, res, next) => {
   Movie.find()
  .then(movies => {
  res.render("movies/index", { movies });
  })
  .catch(error => {
    next();
    console.log(error);
  })
});

router.get("/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then(moviesId => {
      res.render("movies/show", { movies: moviesId });
    })
    .catch(error => {
      next();
      console.log(error);
    })
  });

module.exports = router;