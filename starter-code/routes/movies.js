const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

router.get('/', async(req, res, next) => {
    try {
        const movies = await Movie.find();
        res.render('movies/index', { movies: movies });
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render('movies/show', { movie: movie });
    } catch (err) {
        next();
        console.log(err);
    }
});

router.get('/new', async(req, res, next) => {
    try {
        res.render('movies/new');
    } catch (err) {
        next();
        console.log(err);
    }
});

router.post('/', async(req, res, next) => {
    try {
        await Movie.create(req.body);
        res.redirect("/movies");
    } catch (err) {
        res.redirect("/movies/new");
        console.log(err);
    }
});

router.post('/:id/delete', async(req, res, next) => {
    try {
        await Movie.findByIdAndRemove(req.params.id);
        res.redirect("/movies");
    } catch (err) {
        next();
        console.log(err);
    }
});



module.exports = router;