const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', async function (req, res, next) {
    try {
        let movies = await Movie.find();
        res.status(200)
            .render("movies/index", {
                movies
            });

    } catch(err) {

        next(err);
    }

});

router.post('/', async function (req, res, next) {
    try {
        const {title, genre, plot } = req.body;

        let movie =  new Movie({ title, genre, plot }).save();

        let movies = await Movie.find();

        res.status(201)
            .render("movies/index", {
                movies
            });

    } catch(err) {

        res.status(404)
            .render("movies/new");
    }

});

router.get('/new', function (req, res, next) {
    res.status(200)
        .render("movies/new");
});

router.get('/:id/delete', async function (req, res, next) {
    try {

        await Movie.findByIdAndDelete(req.params.id);
        let movies = await Movie.find();

        res.status(200)
            .render("movies/index", {
                movies
            });

    } catch(err) {
        next(err);
    }

});

router.get('/:id/edit', async function (req, res, next) {
    try {

        let movie = await Movie.findById(req.params.id);

        res.status(200)
            .render("movies/edit", {
                movie
            });

    } catch(err) {
        next(err);
    }

});

router.post('/:id/edit', async function (req, res, next) {
    try {

        let { title, genre, plot } = req.body;
        let movie = await Movie.update({ _id: req.params.id }, {
            $set: {
                title,
                genre,
                plot
            }
        });

        let movies = await Movie.find();
        res.status(200)
            .render("movies/index", {
                movies
            });

    } catch(err) {
        next(err);
    }

});

router.get('/:id', async function (req, res, next) {
    try {
        let movie = await Movie.findById(req.params.id);

        res.status(200)
            .render("movies/show", {
                movie
            });

    } catch(err) {

        next(err);
    }

});



module.exports = router;