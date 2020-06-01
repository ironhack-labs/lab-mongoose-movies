const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity')

router.get('/', async (req, res, next) => {
    try {
        const allMovies = await Movie.find({});
        res.render('movies/movies', {movies: allMovies});
    } catch (error) {
        console.log('Error listing movies: ' + error);
    }
})

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

router.post('/:movieId/delete', async (req, res, next) => {
    try {
        await Movie.findByIdAndDelete(req.params.movieId);
        res.redirect('/movies')
    } catch (error) {
        console.log('Error deleting movie: ' + error);
    }
})

router.get('/:movieId/edit', async (req, res, next) => {
    try {
        const oneMovie = await Movie.findById(req.params.movieId);
        const allCelebrities = await Celebrity.find({});
        const newCelebrities = allCelebrities.map(cel => ({_id: cel._id, name: cel.name, selected: oneMovie.cast.indexOf(cel._id) !== -1}))
        res.render('movies/edit-movie', {oneMovie, celebrities: newCelebrities});
    } catch (error) {
        console.log('Error editing movie: ' + error);
    }
})

router.post('/:movieId', async (req, res, next) => {
    try {
        const {title, genre, plot, cast} = req.body;
        await Movie.findByIdAndUpdate(req.params.movieId, {title, genre, plot, cast});
        res.redirect('/movies/' + req.params.movieId);
    } catch (error) {
        console.log('Error editing movie: ' + error);
    }

})

router.get('/:movieId', async (req, res, next) => {
    try {
        const singleMovie = await Movie.findById(req.params.movieId).populate('cast');
        res.render('movies/movie-details', singleMovie);
    } catch (error) {
        console.log('Error detailing a movie: ' + error)
    }
})

module.exports = router;