const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');




router.get('/', async(req, res, next) => {
    try {
        const movies = await Movie.find();
        res.render('movies/index', { movies });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/', (req, res, next) => {
    const newMovie = new Movie(req.body);
    console.log(newMovie)
    newMovie.save()
        .then(() => {
            console.log(`Movie ${newMovie} created`);
            res.redirect('/movies');
        })
        .catch((error) => {
            res.render('movies/new');
            console.log(error);
        });
});

router.get('/:id', async(req, res) => {
    console.log(`entrou nessa rota`)
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        res.render('movies/show', movie);
    } catch (error) {
        console.log(error);
    }
})

router.post('/:id/delete', async(req, res, next) => {
    const { id } = req.params;
    try {
        await Movie.findByIdAndRemove(id);
        console.log('Delete with success.');
        res.redirect('/movies');
    } catch (error) {
        console.log(error);
    }
})

router.get(`/:id/edit`, async(req, res, next) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        res.render('movies/edit', movie);
    } catch (error) {
        console.log(error);
    }
})

router.post('/:id', async(req, res, next) => {
    const { id } = req.params;
    const movie = req.body;
    try {
        await Movie.findByIdAndUpdate(id, movie);
        res.redirect('/movies');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;