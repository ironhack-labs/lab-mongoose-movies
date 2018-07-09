const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities", { celebrities });
    })
    .catch(err => console.log(err));
});


router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log(movies);
      res.render("movies", { movies });
    })
    .catch(err => console.log(err));
});

module.exports = router;
