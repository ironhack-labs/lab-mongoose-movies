const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie.js");

router.get('/movies/index', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    res.locals.movies = movies;
    res.render('movies/index.hbs');
  })
  .catch((err) =>{
    next(err)
  })
})



module.exports = router;