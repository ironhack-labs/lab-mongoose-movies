const express = require('express');
const router = express.Router();
const movieModel = require('../model/movie');

router.get('/', async (req, res, next) => {
    try {
        const movies = await movieModel.find();
        return res.render('movies/index', { movies, title: 'Movies' });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        return res.render('movies/show', { movie, title: movie.title });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/form', async (req, res, next) => {
    try {
        return res.render('movies/form', { title: 'Create Movie' });
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
        return res.redirect('/movies');
    } catch (err) {
        console.error(err);
        return res.redirect('movies/form');
        next();
    }
});

router.post('/:id/delete', async (req, res, next) => {
    try {
        const movie = await movieModel.findByIdAndRemove(req.params.id);
        return res.redirect('/movies');
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id/edit', async (req, res, next) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        return res.render('movies/form', { movie, title: `Edit: ${ movie.title }` });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.post('/:id', async (req, res, next) => {
    try {
        const { title, genre, plot } = req.body;
        const movie = await movieModel.findByIdAndUpdate(req.params.id, {
            title,
            genre,
            plot
        });
        return res.redirect('/movies');
    } catch (err) {
        console.error(err);
        next();
    }
});

module.exports = router;
