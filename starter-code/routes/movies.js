const express = require('express');

const router = express.Router();
const Movies = require('../models/Movie');
const Celebrities = require('../models/Celebrity');


router.get('/', (req, res) => {
  Movies.find({})
    .then((movies) => res.render('movies/movies', { movies }))
    .catch((error) => console.log(error));
});

router.get('/new', (req, res) => {
  Celebrities.find({})
    .then((celebrities) => res.render('movies/new-movie', { celebrities }));
});

module.exports = router;
