const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();


router.get('/celebrities', (req, res, next) => {
	Celebrity.find({}, (err, celebrities) => {
		if (err) { return next(err) }

			res.render('celebrities/index', {
				celebrities: celebrities
			});
	});
});


router.get('/celebrities/:id/show', (req, res, next) => {
	const celebrityId = req.params.id;

	Celebrity.findById(celebrityId, (err, celebrity) => {
		if (err) { return next(err); }

		res.render('celebrities/show', {
			celebrity: celebrity
		});
	});
});

// route handler for new celebrity form - GET
router.get('/celebrities/new', (req, res, next) => {
	res.render('celebrities/new');
});


router.post('/celebrities', (req, res, next) => {
	// translate params into a new celebrity object
	
	const celebinfo = {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchPhrase
	}

	// Create a new celebrity
	// "/celebrities/new" form
	
	const newCeleb = new Celebrity(celebinfo);

	newCeleb.save((err) => {
		if (err) { return next(err) }

			// redirect to the list of celebrities (/celebrities)
			// if saves properly
			return res.redirect('/celebrities');
	});
});


router.post('/celebrities/:id/delete', (req, res, next) => {
	const celebId = req.params.id;

	Celebrity.findByIdAndRemove(celebId, (err, product) => {
		if (err) { return next (err) }

		return res.redirect('/celebrities');
	});
});


router.get('/celebrities/:id/edit', (req, res, next) => {
	const celebId = req.params.id;

	Celebrity.findById(celebId, (err, celebrity) => {
		if (err) { return next(err) }
			res.render('celebrities/edit', { celebrity: celebrity });
	});
});


router.post('/celebrities/:id', (req, res, next) => {
	const celebId = req.params.id;

	const updates = {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchPhrase
	}

	Celebrity.findByIdAndUpdate(celebId, updates, (err, celebrity) => {
		if (err) {
			return next(err);
		}

		return res.redirect('/celebrities');
	});
});


module.exports = router;