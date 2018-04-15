const express = require('express');
const router = express.Router();
const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

router.get('/index', (req, res, next) => {

  Movie.find().then(movies =>{
    //debug(movies)
    res.render('movies/index', {movies});
  })
  .catch(err => res.render("error", err));
});

router.get("/:id", (req, res, next) => {

  Movie.findById(req.params.id)
  .then(movie_detail => {
    //debug(movie_detail)
    res.render("movies/show", {movie_detail});
  })
  .catch(err => res.render("error", err));
});

module.exports = router;