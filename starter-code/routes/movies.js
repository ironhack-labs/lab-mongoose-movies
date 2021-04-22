const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.model.js');

router.get('/', (req, res) => {
    Movie.find({})
    .then(movies => {
        res.render('movies/index', {movies});
    })
    .catch(error => console.error(error));
})

router.post('/',(req, res) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const plot = req.body.plot;

    Movie.create({title, genre, plot})
    .then(() => {
        res.redirect('/movies');
    })
    .catch(error => console.error(error));
})

router.get('/new', (req, res) => {
    res.render('movies/new');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Movie.findById(id)
    .then( movie => {
        res.render( 'movies/show', movie);
    })
    .catch(error => console.error(error));
});

router.post('/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const genre = req.body.genre;
    const plot = req.body.plot;

    Movie.findByIdAndUpdate(id,{title, genre, plot})
    .then( () => {
        res.redirect('/movies');
    })
    .catch(error => console.error(error));
});

router.post('/:id/delete', (req, res) => {
    const id = req.params.id;
    Movie.findByIdAndDelete(id)
    .then( () => {
        res.redirect('/movies');
    })
    .catch(error => console.error(error));
});

router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Movie.findById(id)
    .then( Movie => {
        res.render( 'movies/edit', movie);
    })
    .catch(error => console.error(error));
});

module.exports = router;