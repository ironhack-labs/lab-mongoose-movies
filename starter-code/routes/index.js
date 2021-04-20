const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie.model")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then((movies) => {
    res.status(200).render('movies/movies', {movies});
     }).catch((err) => {
    console.error("error loading moviess")
    next(err);
  })
});


module.exports = router;


