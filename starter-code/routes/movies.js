const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');

router.get('/', (req,res,next) => {
  Movie.find()
    .then( (allMoviesFromDb) => res.render('movies',{allMoviesFromDb}))
    .catch( (err) => console.error(err));
});

module.exports = router;