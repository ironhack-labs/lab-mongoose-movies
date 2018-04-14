const express = require('express');
const router  = express.Router();
const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find().then( movies =>{
    //debug(movies)
    res.render('movies', {movies});
  })
});


router.get("/:id", (req, res, next) => {

  Movie.findById(req.params.id)
  .then(movie_detail => {
    debug(movie_detail)
    res.render("movies_detail", { movie_detail});
  });
});

module.exports = router;
