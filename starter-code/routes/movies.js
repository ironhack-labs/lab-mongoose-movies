const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


router.get('/', (req, res) => {
	Movie.find()
		.then(movies => {
			res.render('movies/index', {movies});
		})
		.catch((error) => {
			console.log('Error while getting the movie from the DB', error);
		});
});


router.get('/new', (req, res) => {
	res.render('movies/new');
});


router.get('/:id/edit', (req, res) => {
	Movie.findById(req.params.id)
		.then(movie => {
			res.render('movies/edit', {movie});
		});
});


router.get('/:id', (req, res, next) => {
	Movie.findById(req.params.id)
		.then(movie => {
			res.render('movies/show', {movie});
		})
		.catch((error) => {
			next(error);
		})
});


router.post('/new', (req, res) => {
	Movie.create(req.body)
		.then(() => {
			res.redirect('/movies');
		})
		.catch(() => res.render('movies/new', {errorMessage: 'Error while adding a new movie.'}));
});


router.post('/:id/delete', (req, res, next) => {
	Movie.findByIdAndDelete(req.params.id)
		.then(res.redirect('/movies'))
		.catch((error) => next(error));
});


router.post('/:id/edit', (req, res, next) => {
	Movie.findByIdAndUpdate(req.params.id, req.body)
		.then(res.redirect('/movies'))
		.catch(error => next(error));
});




module.exports = router;
