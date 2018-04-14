const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

// GET detail
router.get("/:id", (req, res, next) => {
  Movie.findById( req.params.id)
    .then( movie => {
      res.render("movies/show", {movie} );
    })
});

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then( movies => {
      res.render("movies/index", {movies});
    })
    .catch( error => {
    })
});


module.exports = router;
