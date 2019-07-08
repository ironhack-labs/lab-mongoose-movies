const express = require('express');
const router = express.Router();

const Celebrities = require('./../models/Celebrity');

router.get('/', async (req, res, next) => {
	try {
		const data = await Celebrities.find().select('name');
		res.render('celebrities', { celebrities: data });
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		let celebrity = new Celebrities(req.body);
		await celebrity.save();
		res.redirect('/celebrities');
	} catch (error) {
		res.redirect('/celebrities/new');
		next(error);
	}
});

router.get('/new', async (req, res, next) => {
	try {
		res.render('celebrities/new');
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const data = await Celebrities.findById(req.params.id);
		res.render('celebrities/show', data);
	} catch (error) {
		next(error);
	}
});

router.post('/:id', async (req, res, next) => {
	try {
		const data = await Celebrities.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		});
		res.redirect('/celebrities/');
	} catch (error) {
		next(error);
	}
});

router.get('/:id/edit', async (req, res, next) => {
	try {
		const data = await Celebrities.findById(req.params.id);
		res.render('celebrities/edit', data);
	} catch (error) {
		next(error);
	}
});

router.post('/:id/delete', async (req, res, next) => {
	try {
		await Celebrities.findByIdAndRemove(req.params.id);
		res.redirect('/celebrities');
	} catch (error) {
		next(error);
	}
});

module.exports = router;
