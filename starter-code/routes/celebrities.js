const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');

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
	Celebrity.findById(req.params.id)
		.then((result) => res.render('celebrities/edit', { celebrity: result }))
		.catch((err) => {
			console.log(err);
			next();
		});
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
	const updatedCelebrity = {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchPhrase,
	};

	if (error) {
		celebrity
			.findById(req.params.id)
			.then((result) => {
				res.render('celebrities/edit', { celebrity: updatedCelebrity, savedStar: result, errors: errors });
			})
			.catch((e) => console.log(e));
	} else {
		Celebrity.findByIdAndUpdate(req.params.id, updatedCelebrity, { new: true })
			.then(() => res.redirect('/celebrities'))
			.catch((err) => console.log(err));
	}
});

module.exports = router;
