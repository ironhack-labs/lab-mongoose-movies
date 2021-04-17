const express = require('express');
const Movie = require('../model/Movie.model.js');
const router  = express.Router();

router.get('/', (req, res, next) => {
    Movie.find({})
    .then(movies => {
        res.render('movies/index', { movies });
    })
    .catch(error => next(error));
})

module.exports = router;