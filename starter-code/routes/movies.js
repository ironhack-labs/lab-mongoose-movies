const express = require("express");
const url = require("url");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(err => {
      next();
    });
});

module.exports = router;