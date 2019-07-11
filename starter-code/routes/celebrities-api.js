const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/', async (req, res, next) => {
	try {
		const response = await Celebrity.find();
		res.json(response);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		Celebrity.create(req.body)
			.then((response) => {
				res.json(response);
			})
			.catch((err) => {
				console.log(err);
				next(erro);
			});
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.put('/', async (req, res, next) => {
	try {
		Celebrity.findByIdAndUpdate(req.body.id, req.body)
			.then((response) => {
				res.json(response);
			})
			.catch((err) => {
				console.log(err);
				next(erro);
			});
	} catch (error) {
		console.log(error);
		next(error);
	}
});

module.exports = router;
