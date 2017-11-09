const express = require('express');
const Movie = require('../models/movies');

const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err); }
    res.render('movies/index', {movies});
  });
});



module.exports = router;
