const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {
	console.log('HEllo');
	Movie.find().then((result) => {
		res.render('movies/index', { allMovies: result });
	});
});

router.get('/movies/details/:id', (req, res, next) => {
	let id = req.params.id;

	Movie.findById(id).then((result) => {
		res.render('movies/show', { movie: result });
	});
});

router.get('/movies/new', (req, res, next) => {
	res.render('movies/new');
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
	let id = req.params.id;
	Movie.findById(id).then((results) => {
		res.render('movies/edit', { movie: results });
	});
});

router.post('/celebrities/edited/:id', (req, res, next) => {
	let title = req.body.theTitle;
	let genre = req.body.theGenre;
	let plot = req.body.thePlot;
	let actors = req.body.theActors;
	Celebrity.findByIdAndUpdate(id, {
		title: title,
		genre: genre,
		plot: plot,
		actors: actors
	}).then((result) => {
		res.redirect('/movies');
	});
});

module.exports = router;
