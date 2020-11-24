const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((moviesFromDB) => {
            res.render('movies/index', {
                moviesFromDB
            });
        })
        .catch((error) => next(error));
});

module.exports = router;