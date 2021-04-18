const express = require('express');
const Movie = require('../model/Movie.model.js');
const router  = express.Router();

router.get('/', (req, res, next) => {
    Movie.find({})
    .then(movies => {
        res.render('movies/index', { movies });
    })
    .catch(error => next(error));
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
    .then(movie => res.render('movies/show', movie))
    .catch(error => next(error));
});

module.exports = router;