const express = require('express');

const router  = express.Router();

const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(celebrities => res.render('movies/index', { celebrities }))
    .catch(err => next(err));
});
