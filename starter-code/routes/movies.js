const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');

router.get('/:movieId', (req, res, next) => {
  const {movieId} = req.params;
  Movie.findById(movieId)
    .then((oneMovie) => res.render('movies/show',{oneMovie}))
    .catch((err) => console.error(err));
})

router.get('/', (req,res,next) => {
  Movie.find()
    .then( (allMoviesFromDb) => res.render('movies',{allMoviesFromDb}))
    .catch( (err) => console.error(err));
});

module.exports = router;