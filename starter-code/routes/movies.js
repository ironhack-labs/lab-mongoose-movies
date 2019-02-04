const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

/* GET products listing. */
router.get('/', (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      console.log('okb');
      res.render('movies/index', { movies });
    })
    .catch(next);
});


module.exports = router;
