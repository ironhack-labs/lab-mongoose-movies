const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
	Celebrity.find()
		.then((result) => {
			res.render('celebrities/index', {
				data: result,
			});
		})
		.catch((err) => {
			console.log(err);
			next();
		});
});

router.post('/', (req, res, next) => {
	const newPeople = {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchPhrase,
	};
	Celebrity.create(newPeople)
		.then(() => res.redirect('/celebrities'))
		.catch((err) => {
			let errors = {};
			if (req.body.name === '' || req.body.occupation === '') {
				errors.message = 'Please enter all the mandatory fields.';
				if (req.body.name === '') {
					errors.emptyName = true;
				}
				if (req.body.occupation === '') {
					errors.emptyOccupation = true;
				}
			}

			res.render('celebrities/new', { base: req.body, errors: errors });
		});
});

router.post('/:id/delete', (req, res, next) => {
	Celebrity.findByIdAndRemove(req.params.id)
		.then(() => res.redirect('/celebrities'))
		.catch(() => next());
});

router.post('/:id/edit', (req, res, next) => {
	async function getData(id) {
		try {
			const star = await Celebrity.findById(id)
				.then()
				.catch((e) => console.log(e));
			const actorMovies = await Movie.find({ actors: { $elemMatch: { $eq: star._id } } })
				.then()
				.catch((e) => console.log(e));
			const otherMovies = await Movie.find({ actors: { $nin: star._id } })
				.then()
				.catch((e) => console.log(e));
			res.render('celebrities/edit', {
				js: ['addMovieToStar'],
				celebrity: star,
				actorMovies: actorMovies,
				otherMovies: otherMovies,
			});
		} catch (err) {
			console.log(err);
		}
	}
	getData(req.params.id);
});

router.get('/new', (req, res, next) => {
	res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((star) => {
			res.render('celebrities/show', { celebrity: star });
		})
		.catch((err) => {
			console.log(err);
			next();
		});
});

router.post('/:id', (req, res, next) => {
	let errors = {};
	let error = false;
	if (req.body.name === '') {
		errors.emptyName = true;
		error = true;
	}
	if (req.body.occupation === '') {
		errors.emptyOccupation = true;
		error = true;
	}
	let listMovies = req.body.moviesPlayed.split(',');
	const updatedCelebrity = {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchPhrase,
		movies: listMovies,
	};

	if (error) {
		celebrity
			.findById(req.params.id)
			.then((result) => {
				res.render('celebrities/edit', { celebrity: updatedCelebrity, savedStar: result, errors: errors });
			})
			.catch((e) => console.log(e));
	} else {
		async function updateAll() {
			try {
				for (let i = 0; i < listMovies.length; i++) {
					await Movie.findByIdAndUpdate(listMovies[i], { $push: { actors: req.params.id } }, { new: true })
						.then((e) => console.log(e))
						.catch((e) => console.log(e));
				}
				await Celebrity.findByIdAndUpdate(req.params.id, updatedCelebrity, { new: true })
					.then()
					.catch((err) => console.log(err));
				res.redirect('/celebrities');
			} catch (e) {
				console.log(e);
			}
		}
		updateAll();
	}
});

module.exports = router;
