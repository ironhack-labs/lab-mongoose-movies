const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');

router.get('/', (req, res, next) => {
  Movie.find()
  .then((allTheMovies)=>{
      res.render('movies/movies', {movies: allTheMovies})
  })
  .catch((err)=>{
      next(err);
  })
});





module.exports = router;