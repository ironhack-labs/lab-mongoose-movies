
const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {

  Movie.find()
    .then((whatever) => {

      res.render('movies/index', { moviesList: whatever })
    })
    .catch((error) => {
    })
});


module.exports = router;
