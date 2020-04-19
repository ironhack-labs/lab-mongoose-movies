const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
	Movie.find()
		.then((result) => {
			res.render('movies/index', {
				movies: result,
			});
		})
		.catch((err) => next());
});

router.get('/:id', (req, res, next) => {
	async function getData() {
		try {
			const movie = await Movie.findById(req.params.id)
				.then()
				.catch((e) => next());

			let actors = [];
			for (let i = 0; i < movie.actors.length; i++) {
				let actor = await Celebrity.findById(movie.actors[i])
					.then()
					.catch((e) => console.log(e));
				actors.push(actor);
			}
			res.render('movies/show', {
				movie: movie,
				actors: actors,
			});
		} catch (e) {
			console.log(e);
		}
	}
	getData();
});

router.get('/new', (req, res, next) => {
	res.render('movies/new');
});

router.post('/', (req, res, next) => {
	const newMovie = {
		title: req.body.title,
		genre: req.body.genre,
		plot: req.body.plot,
	};
	Movie.create(newMovie)
		.then(() => res.redirect('/movies'))
		.catch((error) => {
			let errors = {};
			if (req.body.title === '') {
				errors.message = 'Please enter all the mandatory fields.';
				errors.emptyTitle = true;
			}
			res.render('movies/new', { base: req.body, errors: errors });
		});
});

router.post('/:id/delete', (req, res, next) => {
	Movie.findByIdAndRemove(req.params.id)
		.then(() => res.redirect('/movies'))
		.catch(() => next());
});

router.post('/:id/edit', (req, res, next) => {
	Movie.findById(req.params.id)
		.then((result) => res.render('movies/edit', { movie: result }))
		.catch((err) => {
			console.log(err);
			next();
		});
});

router.post('/:id', (req, res, next) => {
	let errors = {};
	let error = false;
	if (req.body.title === '') {
		errors.emptyTitle = true;
		error = true;
	}
	const updatedMovie = {
		title: req.body.title,
		genre: req.body.genre,
		plot: req.body.plot,
	};

	if (error) {
		Movie.findById(req.params.id)
			.then((result) => {
				res.render('movies/edit', { movie: updatedMovie, savedMovie: result, errors: errors });
			})
			.catch((e) => console.log(e));
	} else {
		Movie.findByIdAndUpdate(req.params.id, updatedMovie, { new: true })
			.then(() => res.redirect('/movies'))
			.catch((err) => console.log(err));
	}
});

module.exports = router;
