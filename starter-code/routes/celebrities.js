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
	async function deleteAll() {
		try {
			const listMovies = await Movie.find({ actors: { $elemMatch: { $eq: star._id } } })
				.then()
				.catch((err) => console.log(err));
			for (let i = 0; i < listMovies.length; i++) {
				let actorsList = listMovies[i].actors;
				actorsList = actorsList.splice(actorsList.indexOf(req.params.id), 1);
				await Movie.findByIdAndUpdate(listMovies[i]._id, { actors: actorsList }, { new: true })
					.then()
					.catch((err) => console.log(err));
			}
			await Celebrity.findByIdAndRemove(req.params.id)
				.then(() => res.redirect('/celebrities'))
				.catch(() => next());
		} catch (e) {
			console.log(e);
		}
	}
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
	};

	if (error) {
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

				Celebrity.findById(id)
					.then((result) => {
						res.render('celebrities/edit', {
							celebrity: updatedCelebrity,
							js: ['addMovieToStar'],
							savedStar: result,
							actorMovies: actorMovies,
							otherMovies: otherMovies,
							errors: errors,
						});
					})
					.catch((e) => console.log(e));
			} catch (err) {
				console.log(err);
			}
		}
		getData(req.params.id);
	} else {
		async function updateAll() {
			try {
				// Get previous movies, before the update
				const listBeforeUpdate = await Movie.find({ actors: { $elemMatch: { $eq: req.params.id } } })
					.then()
					.catch((e) => console.log(e));
				// Delete all iteration of this celebrity in his movies
				for (let i = 0; i < listBeforeUpdate.length; i++) {
					const datMovie = await Movie.findById(listBeforeUpdate[i])
						.then()
						.catch((e) => console.log(e));
					let woActor = datMovie.actors;
					woActor.splice(datMovie.actors.indexOf(req.params.id));
					await Movie.findByIdAndUpdate(listBeforeUpdate[i], { actors: woActor }, { new: true })
						.then((r) => console.log(r))
						.catch((e) => console.log(e));
				}

				// Redefinition of the movies where this celebrity played
				if (listMovies != '') {
					for (let i = 0; i < listMovies.length; i++) {
						const datMovie = await Movie.findById(listMovies[i])
							.then()
							.catch((e) => console.log(e));
						if (!datMovie.actors.find((x) => x === req.params.id)) {
							await Movie.findByIdAndUpdate(listMovies[i], { $push: { actors: req.params.id } }, { new: true })
								.then((e) => console.log(e))
								.catch((e) => console.log(e));
						}
					}
				}

				// Update the celebrity
				await Celebrity.findByIdAndUpdate(req.params.id, updatedCelebrity, { new: true })
					.then()
					.catch((err) => console.log(err));

				// Redirect after all is done !
				res.redirect('/celebrities');
			} catch (e) {
				console.log(e);
			}
		}
		updateAll();
	}
});

module.exports = router;
