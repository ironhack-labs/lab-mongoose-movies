const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', async (req, res, next) => {
	try {
		const celebrities = await Celebrity.find();
		res.render('celebrities/index', { celebrity: celebrities });
		console.log(`Found and rendered this celebrities: ${celebrities}`);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
