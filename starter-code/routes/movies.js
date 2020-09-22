const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

router.get('/', (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.render('movies/index', { movies: movies });
    } catch (err) {
        next();
        console.log(err);
    }
});

module.exports = router;