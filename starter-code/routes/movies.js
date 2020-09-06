const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


/* GET celebrity page */
router.get('/', (req, res, next) => {
    Movie.find()
    .then( movieList => {
        res.render('movies',{movieList})
    })
    .catch(err => {
        next(err)
      })
  });

module.exports = router;