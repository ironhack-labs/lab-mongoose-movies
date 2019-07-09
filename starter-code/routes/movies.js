const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');
const Celebrity = require('./../models/Celebrity');

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
		req.flash('success', 'Movie Created');
		res.redirect('/movies');
	} catch (error) {
		res.redirect('/movies/new');
		next(error);
	}
});

router.get('/new', async (req, res, next) => {
	try {
		const celebrities = await Celebrity.find();
		res.render('movies/new', { actors: celebrities });
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const data = await Movie.findById(req.params.id).populate('actor');
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
		req.flash('success', 'Movie Updated');
		res.redirect('/movies');
	} catch (error) {
		next(error);
	}
});

router.get('/:id/edit', async (req, res, next) => {
	try {
		const data = await Movie.findById(req.params.id).populate('actor');
		const actors = await Celebrity.find();
		actors.forEach((actor) => {
			if (actor.name === data.actor.name) {
				actor.selected = true;
			}
		});
		res.render('movies/edit', { data, actors });
	} catch (error) {
		next(error);
	}
});

router.post('/:id/delete', async (req, res, next) => {
	try {
		await Movie.findByIdAndRemove(req.params.id);
		req.flash('success', 'Movie deleted');
		res.redirect('/movies');
	} catch (error) {
		next(error);
	}
});

module.exports = router;
