const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', async (req, res, next) => {
	try {
		const celebrities = await Celebrity.find();
		res.render('celebrities/index', { title: 'Celebrities', celebrity: celebrities });
		console.log(`Found and rendered this celebrities: ${celebrities}`);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const celebrity = await Celebrity.findById({ _id: id });
		const { name, occupation, catchPhrase } = celebrity;

		console.log(`Found celebrity is ${name}`);

		res.render('celebrities/show', { title: name, name, occupation, catchPhrase });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
