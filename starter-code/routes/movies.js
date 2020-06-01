const express = require('express');
const Movie = require('../models/movie');
const route = express.Router();

route.get('/', (req, res, next) => {
	Movie.find()
		.then((movies) => res.render('movies/index', { movies }))
		.catch((err) => next());
});
route.post('/', (req, res, next) => {
	const { title, genre, plot } = req.body;
	Movie.create({ title, genre, plot })
		.then((movie) => res.redirect('/movies'))
		.catch((err) => {
			console.log(`Error creating a movie: ${err}`);
			res.render('movies/new');
		});
});
route.get('/:id/edit', (req, res, next) => {
	Movie.findById(req.params.id)
		.then((movie) => res.render('movies/edit', movie))
		.catch((err) => {
			console.log(`Error editing a movie: ${err}`);
			next();
		});
});
route.get('/:id', (req, res, next) => {
	Movie.findById(req.params.id)
		.then((movie) => res.render('movies/show', movie))
		.catch((err) => next());
});
route.post('/:id', (req, res, next) => {
	const { title, genre, plot } = req.body;
	Movie.update({ _id: req.params.id }, { title, genre, plot })
		.then((cel) => res.redirect('/movies'))
		.catch((err) => {
			console.log(`Error saving a movie: ${err}`);
			next();
		});
});
route.get('/new', (req, res, next) => {
	res.render('movies/new');
});

route.post('/:id/delete', (req, res, next) => {
	Movie.findByIdAndRemove(req.params.id)
		.then((movie) => res.redirect('/movies'))
		.catch((err) => {
			console.log(`Error deleting a movie: ${err}`);
			next();
		});
});

module.exports = route;
