const express = require('express');
const router = express.Router();
const movieModel = require('../model/movie');

router.get('/', async (req, res, next) => {
    try {
        const movies = await movieModel.find();
        res.render('movies/index', { movies });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        res.render('movies/show', { movie });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/form', async (req, res, next) => {
    try {
        res.render('movies/form');
    } catch (err) {
        console.error(err);
        next();
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { title, genre, plot } = req.body;
        const movie = await movieModel.create({ title, genre, plot });
        movie.save();
        res.redirect('/movies');
    } catch (err) {
        console.error(err);
        res.redirect('movies/form');
        next();
    }
});

router.post('/:id/delete', async (req, res, next) => {
    try {
        const movie = await movieModel.findByIdAndRemove(req.params.id);
        res.redirect('/movies');
    } catch (err) {
        console.error(err);
        next();
    }
});

module.exports = router;
