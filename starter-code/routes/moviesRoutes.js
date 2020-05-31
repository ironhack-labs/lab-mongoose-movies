const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity')

router.get('/new', async (req, res, next) => {
    try {
        const allCelebrities = await Celebrity.find({});
        res.render('movies/new-movie', {celebrities: allCelebrities});
    } catch (error) {
        console.log('Error at new movies: ' + error);
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const {title, genre, plot, cast} = req.body;
        const newMovie = new Movie({title, genre, plot, cast});
        await Movie.create(newMovie)
        res.redirect('/')
    } catch (error) {
        console.log('Error creating movie: ' + error);
        res.render('movies/new-movie');
    }
})

module.exports = router;