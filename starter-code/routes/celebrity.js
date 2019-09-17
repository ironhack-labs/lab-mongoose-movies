const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {
	Celebrity.find().then((allCelebrities) => {
		res.render('celebrities/index', { allCelebs: allCelebrities });
	});
});

router.get('/celebrities/details/:id', (req, res, next) => {
	let id = req.params.id;

	Celebrity.findById(id).then((celebDetails) => {
		// console.log(celebDetails);
		res.render('celebrities/show', celebDetails);
	});
});

router.get('/celebrities/new', (req, res, next) => {
	res.render('celebrities/new');
});

router.post('/celebrities/created', (req, res, next) => {
	let name = req.body.theName;
	let occu = req.body.theOccupation;
	let catchP = req.body.theCatchphrase;
	Celebrity.create({ name: name, occupation: occu, catchPhrase: catchP });
	res.redirect('/celebrities');
	console.log(name);
});

router.post('/celebrities/delete/:id', (req, res, next) => {
	let id = req.params.id;

	Celebrity.findByIdAndRemove(id)
		.then((result) => {
			res.redirect('/celebrities');
		})
		.catch((err) => {
			next(err);
		});
});

router.get('/celebrities/edit/:id', (req, res, next) => {
	let id = req.params.id;
	Celebrity.findById(id).then((celebDetails) => {
		console.log(celebDetails);
		res.render('celebrities/edit', { details: celebDetails });
	});
});

router.post('/celebrities/edited/:id', (req, res, next) => {
	let name = req.body.theName;
	let occu = req.body.theOccupation;
	let catchP = req.body.theCatchphrase;
	let id = req.params.id;
	Celebrity.findByIdAndUpdate(id, {
		name: name,
		occupation: occu,
		catchPhrase: catchP
	}).then((result) => {
		res.redirect('/celebrities');
	});
});

module.exports = router;
