const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/movies', (req, res, next) => {
	Movie.find({}, (err, movies) => {
		if (err) { return next(err) }

			res.render('movies/index', {
				movies: movies
			});
	});
});

router.get('/movies/:id/show', (req, res, next) => {
	const movieId = req.params.id;

	Movie.findById(movieId, (err, movie) => {
		if (err) { return next(err); }

		res.render('movies/show', {
			movie: movie
		});
	});
});

router.get('/movies/new', (req, res, next) => {
	res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
	// translate params into a new movie object
	const movieinfo = {
		title: req.body.title,
		genre: req.body.genre,
		plot: req.body.plot
	}

	// create a new movie
	const newMovie = new Movie(movieinfo);

	newMovie.save((err) => {
		if (err) { return next(err) }
			// redirect to the list of movies
			return res.redirect('/movies');
	});
});

router.post('/movies/:id/delete', (req, res, next) => {
	const movieId = req.params.id;

	Movie.findByIdAndRemove(movieId, (err, movie) => {
		if (err) { return next (err) }
			return res.redirect('/movies');
	});
});


router.get('/movies/:id/edit', (req, res, next) => {
	const movieId = req.params.id;

	Movie.findById(movieId, (err, movie) => {
		if (err) { return next(err) }
			res.render('movies/edit', { movie: movie });
	});
});


router.post('/movies/:id', (req, res, next) => {
	const movieId = req.params.id;

	const updates = {
		title: req.body.title,
		genre: req.body.genre,
		plot: req.body.plot
	}

	Movie.findByIdAndUpdate(movieId, updates, (err, movie) => {
		if (err) {
			return next(err);
		}

		return res.redirect('/movies');
	})
});

module.exports = router;