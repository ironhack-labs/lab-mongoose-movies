const express = require('express');
const router = new express.Router();
const celebrity = require('../models/celebrity');

// Read

router.get('/celebrities', (req, res) => {
	celebrity
		.find({})
		.then((dbResult) => {
			res.render('celebrities/index.hbs', {
				celebrities: dbResult
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/celebrities/new', (req, res) => {
	res.render('celebrities/new.hbs');
});

router.get('/celebrities/:id', (req, res) => {
	celebrity
		.findById(req.params.id)
		.then((dbResult) => {
			res.render('celebrities/show.hbs', {
				celebrity: dbResult
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

// Create;

router.post('/celebrities/new', (req, res) => {
	celebrity.create(req.body).then((dbResult) => {
		res.redirect('/celebrities').catch((err) => {
			console.log(err);
		});
	});
});

// Edit

router.get('/celebrities/:id/edit', (req, res) => {
	celebrity
		.findById(req.patams.id)
		.then((dbResult) => {
			res.render('celebrities/edit', { celebrity: dbResult });
		})
		.catch((err) => console.log(err));
});

module.exports = router;
