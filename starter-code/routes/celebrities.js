const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// Retrieve all data route
router.get('/', async (req, res, next) => {
	try {
		const celebrities = await Celebrity.find();
		res.render('celebrities/index', { title: 'Celebrities', celebrity: celebrities });
		console.log(`Found and rendered this celebrities: ${celebrities}`);
	} catch (error) {
		next(error.message);
	}
});

// Retrieve one document route
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const celebrity = await Celebrity.findById(id);
		const { name, occupation, catchPhrase } = celebrity;

		console.log(`Found celebrity is ${name}`);

		res.render('celebrities/show', { title: name, name, occupation, catchPhrase });
	} catch (error) {
		next();
		console.log(error.message);
	}
});

// Create route
router.get('/new', (req, res, next) => {
	res.render('celebrities/new');
});

router.post('/new', async (req, res, next) => {
	try {
		const { name, occupation, catchPhrase } = req.body;
		const celebrity = await Celebrity.create({ name, occupation, catchPhrase });
		console.log(`New celebrity created: ${celebrity}`);
		res.redirect('/celebrities');
	} catch (error) {
		res.render('celebrities/new');
		console.log(`This went wrong ${error}, try again`);
	}
});

// Delete route
router.post('/:id/delete', async (req, res, next) => {
	try {
		const { id } = req.params;
		const celebrity = await Celebrity.findByIdAndRemove(id);
		console.log(`This celebrity has been removed: ${celebrity}`);
		res.redirect('/celebrities');
	} catch (error) {
		next(error.message);
	}
});

// Update route
router.get('/:id/edit', async (req, res, next) => {
	try {
		const { id } = req.params;
		const celebrity = await Celebrity.findById(id);
		console.log(`This celebrity is going to be edited: ${celebrity}`);
		res.render('celebrities/edit', celebrity);
	} catch (error) {
		next(error.message);
	}
});

router.post('/:id/edit', async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, occupation, catchPhrase } = req.body;
		await Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase });
		res.redirect('/celebrities');
	} catch (error) {
		next(error.message);
	}
});

module.exports = router;
