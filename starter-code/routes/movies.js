const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');

router.get('/', async (req, res, next) => {
	try {
		const data = await Movie.find();
		res.render('movies', { movies: data });
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const movie = new Movie(req.body);
		await movie.save();
		res.redirect('/movies');
	} catch (error) {
		res.redirect('/movies/new');
		next(error);
	}
});

router.get('/new', async (req, res, next) => {
	try {
		res.render('movies/new');
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const data = await Movie.findById(req.params.id);
		res.render('movies/show', data);
	} catch (error) {
		next(error);
	}
});

router.post('/:id', async (req, res, next) => {
	try {
		const data = await Movie.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		});
		res.redirect('/movies');
	} catch (error) {
		next(error);
	}
});

router.get('/:id/edit', async (req, res, next) => {
	try {
		const data = await Movie.findById(req.params.id);
		res.render('movies/edit', data);
	} catch (error) {
		next(error);
	}
});

router.post('/:id/delete', async (req, res, next) => {
	try {
		await Movie.findByIdAndRemove(req.params.id);
		res.redirect('/movies');
	} catch (error) {
		next(error);
	}
});

module.exports = router;
