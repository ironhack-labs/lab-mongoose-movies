const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

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
