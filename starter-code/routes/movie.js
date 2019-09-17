const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

router.get('/movies', (req, res, next) => {
	console.log('HEllo');
	Movie.find().then((result) => {
		res.render('movies/index', { allMovies: result });
	});
});

router.get('/movies/details/:id', (req, res, next) => {
	let id = req.params.id;

	Movie.findById(id).populate('actors').then((result) => {
		res.render('movies/show', { movie: result });
	});
});

router.get('/movies/new', (req, res, next) => {
	Celebrity.find()
		.then((result) => {
			res.render('movies/new', { allCelebrities: result });
		})
		.catch((err) => {
			next(err);
		});
});

router.post('/movies/created', (req, res, next) => {
	let title = req.body.theTitle;
	let genre = req.body.theGenre;
	let plot = req.body.thePlot;
	let actors = req.body.theActors;

	Movie.create({ title: title, genre: genre, plot: plot, actors: actors });
	res.redirect('/movies');
});

router.post('/movies/delete/:id', (req, res, next) => {
	let id = req.params.id;

	Movie.findByIdAndRemove(id)
		.then((result) => {
			res.redirect('/movies');
		})
		.catch((err) => {
			next(err);
		});
});

router.get('/movies/edit/:id', (req, res, next) => {
	// Celebrity.find()
	Movie.findById(req.params.id)
		.then((movieResult) => {
			Celebrity.find()
				.then((celebResult) => {
					console.log('the movie ---- ', movieResult);
					console.log('the celeb >>>>> ', celebResult);

					data = {
						movie: movieResult,
						celebs: celebResult
					};
					res.render('movies/edit', data);
				})
				.catch((err) => {
					next(err);
				});
		})
		.catch((err) => {
			next(err);
		});

	// Movie.findById(id).then((results) => {
	// 	res.render('movies/edit', { movie: results });
	// });
});

router.post('/movies/edited/:id', (req, res, next) => {
	let title = req.body.theTitle;
	let genre = req.body.theGenre;
	let plot = req.body.thePlot;
	let actors = req.body.theActors;
	let id = req.params.id;
	Movie.findByIdAndUpdate(id, {
		title: title,
		genre: genre,
		plot: plot,
		actors: actors
	}).then((result) => {
		res.redirect('/movies');
	});
});

module.exports = router;
